import { getRoleById } from "./roles";

const SESSION_KEY = "lms_session";
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

// Basic RFC-5322-ish check — good enough for a login form, not a full validator.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateCredentials(email, password) {
  if (!email.trim()) return "Email wajib diisi.";
  if (!EMAIL_RE.test(email.trim())) return "Format email tidak valid.";
  if (!password) return "Password wajib diisi.";
  if (password.length < 6) return "Password minimal 6 karakter.";
  return null;
}

export async function login(email, password) {
  const validationError = validateCredentials(email, password);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  let res;
  try {
    res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim(), password }),
    });
  } catch {
    return { ok: false, error: "Tidak bisa terhubung ke server. Pastikan backend sedang jalan." };
  }

  const data = await res.json().catch(() => null);

  if (!res.ok || !data) {
    return { ok: false, error: data?.error || "Email atau password salah." };
  }

  const role = getRoleById(data.roleId);
  const session = { token: data.token, email: data.email, name: data.name, roleId: data.roleId };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return { ok: true, session, redirectTo: role?.defaultPath ?? "/" };
}

export async function logout() {
  const session = getSession();
  localStorage.removeItem(SESSION_KEY);

  if (session?.token) {
    try {
      await fetch(`${API_BASE}/api/auth/logout`, {
        method: "POST",
        headers: { Authorization: `Bearer ${session.token}` },
      });
    } catch {
      // Best-effort — the local session is already cleared either way.
    }
  }
}

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return getSession() !== null;
}

// Verifies the stored token is still valid on the server (session may have
// expired or the backend may have restarted, which clears in-memory sessions).
export async function verifySession() {
  const session = getSession();
  if (!session?.token) return false;

  try {
    const res = await fetch(`${API_BASE}/api/auth/me`, {
      headers: { Authorization: `Bearer ${session.token}` },
    });
    if (!res.ok) {
      localStorage.removeItem(SESSION_KEY);
      return false;
    }
    return true;
  } catch {
    // Network hiccup — don't kick the user out for a dropped request.
    return true;
  }
}
