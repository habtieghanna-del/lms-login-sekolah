import { randomBytes } from "node:crypto";

// In-memory session store. This lives in module scope, so it survives across
// requests as long as the Next.js server process stays up (fine for a single
// instance / demo). Restarting `next dev` or deploying to a serverless
// platform with multiple instances will lose sessions — swap this for a real
// store (Redis, a database table, or signed JWTs) before that matters.
const sessions = new Map(); // token -> { name, email, roleId, expiresAt }
const TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

export function createSession(user) {
  const token = randomBytes(32).toString("hex");
  sessions.set(token, { ...user, expiresAt: Date.now() + TTL_MS });
  return token;
}

export function getSession(token) {
  if (!token) return null;
  const session = sessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    sessions.delete(token);
    return null;
  }
  return session;
}

export function destroySession(token) {
  if (token) sessions.delete(token);
}
