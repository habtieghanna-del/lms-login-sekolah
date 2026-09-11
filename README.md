# LMS Sekolah — Login & Dashboard (Citra Eduflow)

Frontend hasil konversi dari desain Figma, dibangun dengan React + Vite + Tailwind CSS v4 dan React Router. Mendukung 5 role yang ada di desain: **Admin, Guru, Siswa, Kepsek, Kurikulum** — masing-masing punya dashboard sendiri.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:5173 di browser.

## Cara pakai

1. Di halaman login, pilih salah satu tab role (Admin / Guru / Siswa / Kepsek / Kurikulum).
2. Isi email & password (tidak divalidasi ke server manapun, ini masih tanpa backend).
3. Klik **Masuk** → akan diarahkan ke `/dashboard/<role>` dengan menu dan statistik yang berbeda sesuai role.
4. Di dalam dashboard, ada tombol **Keluar** untuk kembali ke halaman login, dan tab role di sidebar untuk berpindah demo dashboard lain.

## Struktur project

```
src/
  components/
    Logo.jsx            # ikon logo (SVG, dibuat ulang dari desain)
    RingDecoration.jsx  # dekorasi lingkaran di sisi kiri halaman login
  pages/
    LoginPage.jsx        # halaman login (kiri: hero + role tabs, kanan: form)
    Dashboard.jsx        # dashboard generik yang berubah sesuai role
  roles.js                # sumber data satu-satunya untuk semua role
                           # (tambah role baru cukup di sini)
  App.jsx                 # routing
  main.jsx                # entry point
```

Untuk menghubungkan ke backend sungguhan, ganti logic di `handleSubmit` pada
`LoginPage.jsx` dengan pemanggilan API auth kamu, lalu arahkan berdasarkan role
yang dikembalikan API (bukan dari tab yang dipilih di UI).

## Build untuk production

```bash
npm run build
npm run preview   # untuk mengecek hasil build secara lokal
```

## Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit: LMS Sekolah login + dashboard"
git branch -M main
git remote add origin https://github.com/<username>/<nama-repo>.git
git push -u origin main
```
