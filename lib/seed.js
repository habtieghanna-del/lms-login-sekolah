// Run with `node seed.js` after editing the plaintext list below, to
// regenerate users.json with freshly hashed passwords. users.json itself
// never stores plaintext passwords.
import { writeFileSync } from "node:fs";
import { hashPassword } from "./hash.js";

const PLAINTEXT_USERS = [
  { name: "Admin Sekolah", email: "admin@lms.sch.id", password: "admin123", roleId: "admin" },
  { name: "Bu Sari", email: "guru@lms.sch.id", password: "guru123", roleId: "guru" },
  { name: "Ahmad Fauzi", email: "siswa@lms.sch.id", password: "siswa123", roleId: "siswa" },
  { name: "Kepala Sekolah", email: "kepsek@lms.sch.id", password: "kepsek123", roleId: "kepsek" },
  { name: "Tim Kurikulum", email: "kurikulum@lms.sch.id", password: "kurikulum123", roleId: "kurikulum" },
];

const users = PLAINTEXT_USERS.map((u) => ({
  name: u.name,
  email: u.email,
  roleId: u.roleId,
  passwordHash: hashPassword(u.password),
}));

writeFileSync(new URL("./users.json", import.meta.url), JSON.stringify(users, null, 2));
console.log(`Wrote ${users.length} users to users.json`);
