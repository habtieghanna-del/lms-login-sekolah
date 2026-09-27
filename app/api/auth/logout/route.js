import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { destroySession } from "@/lib/session-store";

const SESSION_COOKIE = "lms_session";

export async function POST() {
  const token = cookies().get(SESSION_COOKIE)?.value;
  destroySession(token);

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
