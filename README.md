# LMS Sekolah — Citra Eduflow (Next.js)

Login & dashboard multi-role untuk LMS sekolah. Sebelumnya dibangun pakai
Vite + React + backend Node terpisah — sekarang jadi satu aplikasi **Next.js**
(App Router): React buat semua tampilan, dan API routes Next.js (jalan di atas
Node.js) buat backend auth-nya. Satu `npm run dev` saja, tidak perlu dua
server terpisah lagi.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Cara pakai

1. Di halaman login, pilih tab role untuk lihat kredensial demo-nya
2. Isi email & password (lihat tabel di bawah), klik **Masuk**
3. Form memanggil `POST /api/auth/login` — kalau valid, server set cookie sesi
   (httpOnly) dan kamu diarahkan ke dashboard sesuai role akun tersebut
4. Tombol **keluar** di sidebar memanggil `POST /api/auth/logout` lalu kembali
   ke halaman login
5. Membuka URL dashboard tanpa login (atau dashboard role lain) otomatis
   di-redirect balik ke halaman login — dicek di server (`layout.jsx` tiap
   dashboard), bukan di browser

## Akun demo

| Role | Email | Password |
|---|---|---|
| Admin | admin@lms.sch.id | admin123 |
| Guru | guru@lms.sch.id | guru123 |
| Siswa | siswa@lms.sch.id | siswa123 |
| Kepsek | kepsek@lms.sch.id | kepsek123 |
| Kurikulum | kurikulum@lms.sch.id | kurikulum123 |

Untuk generate ulang `lib/users.json` (misal ganti password/tambah akun),
edit daftar plaintext di `lib/seed.js`, lalu jalankan:

```bash
npm run seed
```

## Struktur project

```
app/
  page.jsx                  # halaman login ("/")
  layout.jsx                # root layout
  globals.css                # import Tailwind
  api/auth/
    login/route.js          # POST — validasi + cek password + set cookie sesi
    me/route.js              # GET — cek sesi masih valid atau tidak
    logout/route.js          # POST — hapus sesi
  dashboard/
    admin/    layout.jsx (proteksi + sidebar) + 5 halaman
    guru/     layout.jsx (proteksi + sidebar) + 6 halaman
    siswa/    layout.jsx (proteksi + sidebar) + 5 halaman
    kepsek/   layout.jsx (proteksi + sidebar) + 5 halaman
    kurikulum/layout.jsx (proteksi + sidebar) + 5 halaman
components/
  ui.jsx, Logo.jsx, Footer.jsx, RingDecoration.jsx   # presentational, Server Component
  Sidebar.jsx                                          # client component (navigasi + tombol keluar)
lib/
  hash.js            # hashing password (scrypt, bawaan Node)
  session-store.js   # in-memory session store (server-only)
  get-auth.js        # helper baca sesi dari cookie, dipakai di tiap layout dashboard
  auth-client.js     # helper fetch ke /api/auth/login dari LoginPage
  roles.js           # daftar role — tambah role baru cukup di sini
  users.json         # akun + password ter-hash
  seed.js            # generate ulang users.json
data/
  admin.js, guru.js, siswa.js, kepsek.js, kurikulum.js   # data dummy tiap dashboard
```

## Catatan

- Sesi disimpan **in-memory** di server (`lib/session-store.js`) — cukup buat
  demo/single-instance. Kalau nanti di-deploy ke platform serverless dengan
  banyak instance, atau butuh sesi tetap ada setelah server restart, ganti ke
  database/Redis atau JWT.
- Semua dashboard, admin & guru punya data lengkap dari desain Figma asli;
  siswa/kepsek/kurikulum pakai data contoh yang masuk akal (bukan dari Figma).
