import { NextResponse } from "next/server";
import { verifyPassword } from "@/lib/hash";
import { createSession } from "@/lib/session-store";
import users from "@/lib/users.json";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SESSION_COOKIE = "lms_session";
const SESSION_MAX_AGE = 8 * 60 * 60; // seconds

export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Body request tidak valid." }, { status: 400 });
  }

  const email = String(body.email || "").trim();
  const password = String(body.password || "");

  if (!email) return NextResponse.json({ error: "Email wajib diisi." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });
  if (!password) return NextResponse.json({ error: "Password wajib diisi." }, { status: 400 });
  if (password.length < 6) return NextResponse.json({ error: "Password minimal 6 karakter." }, { status: 400 });

  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user || !verifyPassword(password, user.passwordHash)) {
    // Same message either way so we don't leak which emails exist.
    return NextResponse.json({ error: "Email atau password salah." }, { status: 401 });
  }

  const token = createSession({ name: user.name, email: user.email, roleId: user.roleId });

  const res = NextResponse.json({ name: user.name, email: user.email, roleId: user.roleId });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}
