import { createServer } from "node:http";
import { randomBytes } from "node:crypto";
import { readFileSync } from "node:fs";
import { verifyPassword } from "./hash.js";

const PORT = process.env.PORT || 4000;
const users = JSON.parse(readFileSync(new URL("./users.json", import.meta.url), "utf-8"));

// In-memory session store. Fine for a demo/single-instance backend; swap for
// Redis (or JWTs) if you need this to survive a restart or run on multiple
// instances.
const sessions = new Map(); // token -> { email, name, roleId, expiresAt }
const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf-8") || "{}";
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleLogin(req, res) {
  readBody(req).then((body) => {
    if (!body) return sendJson(res, 400, { error: "Body request tidak valid." });

    const email = String(body.email || "").trim();
    const password = String(body.password || "");

    if (!email) return sendJson(res, 400, { error: "Email wajib diisi." });
    if (!EMAIL_RE.test(email)) return sendJson(res, 400, { error: "Format email tidak valid." });
    if (!password) return sendJson(res, 400, { error: "Password wajib diisi." });
    if (password.length < 6) return sendJson(res, 400, { error: "Password minimal 6 karakter." });

    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user || !verifyPassword(password, user.passwordHash)) {
      // Same message either way so we don't leak which emails exist.
      return sendJson(res, 401, { error: "Email atau password salah." });
    }

    const token = randomBytes(32).toString("hex");
    sessions.set(token, {
      email: user.email,
      name: user.name,
      roleId: user.roleId,
      expiresAt: Date.now() + SESSION_TTL_MS,
    });

    sendJson(res, 200, {
      token,
      name: user.name,
      email: user.email,
      roleId: user.roleId,
    });
  });
}

function handleMe(req, res) {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.replace(/^Bearer\s+/i, "");
  const session = sessions.get(token);

  if (!session || session.expiresAt < Date.now()) {
    sessions.delete(token);
    return sendJson(res, 401, { error: "Sesi tidak valid atau kedaluwarsa." });
  }

  sendJson(res, 200, { name: session.name, email: session.email, roleId: session.roleId });
}

function handleLogout(req, res) {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.replace(/^Bearer\s+/i, "");
  sessions.delete(token);
  sendJson(res, 200, { ok: true });
}

const server = createServer((req, res) => {
  cors(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === "POST" && req.url === "/api/auth/login") return handleLogin(req, res);
  if (req.method === "GET" && req.url === "/api/auth/me") return handleMe(req, res);
  if (req.method === "POST" && req.url === "/api/auth/logout") return handleLogout(req, res);

  sendJson(res, 404, { error: "Not found" });
});

server.listen(PORT, () => {
  console.log(`LMS auth backend jalan di http://localhost:${PORT}`);
});
