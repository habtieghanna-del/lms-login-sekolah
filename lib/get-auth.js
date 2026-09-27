import { cookies } from "next/headers";
import { getSession as readSession } from "./session-store";

// Server-only helper — call this from a layout.jsx (Server Component) to
// check whether the current request has a valid session.
export function getServerSession() {
  const token = cookies().get("lms_session")?.value;
  return readSession(token);
}
