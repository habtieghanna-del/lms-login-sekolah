"use client";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateCredentials(email, password) {
  if (!email.trim()) return "Email wajib diisi.";
  if (!EMAIL_RE.test(email.trim())) return "Format email tidak valid.";
  if (!password) return "Password wajib diisi.";
  if (password.length < 6) return "Password minimal 6 karakter.";
  return null;
}

// Calls our own Next.js API route (same origin), so no base URL is needed —
// the session cookie is set by the server response automatically.
export async function login(email, password) {
  const validationError = validateCredentials(email, password);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  let res;
  try {
    res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim(), password }),
    });
  } catch {
    return { ok: false, error: "Tidak bisa terhubung ke server. Coba lagi." };
  }

  const data = await res.json().catch(() => null);

  if (!res.ok || !data) {
    return { ok: false, error: data?.error || "Email atau password salah." };
  }

  return { ok: true, session: data };
}
