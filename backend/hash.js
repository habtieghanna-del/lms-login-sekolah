import { scryptSync, randomBytes, timingSafeEqual } from "node:crypto";

// Uses Node's built-in crypto (scrypt) instead of bcrypt so the backend
// needs zero npm install just to run â€” one less thing that can go wrong
// when demoing this on a fresh machine.

export function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const derived = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${derived}`;
}

export function verifyPassword(password, storedHash) {
  const [salt, hashHex] = storedHash.split(":");
  if (!salt || !hashHex) return false;
  const derived = scryptSync(password, salt, 64);
  const stored = Buffer.from(hashHex, "hex");
  if (derived.length !== stored.length) return false;
  return timingSafeEqual(derived, stored);
}
