import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSession } from "@/lib/session-store";

export async function GET() {
  const token = cookies().get("lms_session")?.value;
  const session = getSession(token);

  if (!session) {
    return NextResponse.json({ error: "Sesi tidak valid atau kedaluwarsa." }, { status: 401 });
  }

  return NextResponse.json({ name: session.name, email: session.email, roleId: session.roleId });
}
