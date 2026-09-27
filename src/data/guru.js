export const SISWA_KELAS_ROWS = [
  ["X PM 1", "Pemasaran", "Ibu Sari", "32"],
  ["X PM 2", "Pemasaran", "Pak Hendra", "31"],
  ["X MP 1", "Manajemen Perkantoran", "Bu Ratna", "30"],
  ["X MP 2", "Manajemen Perkantoran", "Pak Agus", "32"],
  ["X PPLG 1", "Pengembangan Perangkat Lunak", "Bu Ayu", "34"],
  ["X PPLG 2", "Pengembangan Perangkat Lunak", "Miss Suci", "28"],
  ["X PH 1", "Perhotelan", "Bu Wulan", "27"],
  ["X PH 2", "Perhotelan", "Pak Yusuf", "31"],
];

export const ASSESSMEN_ROWS = [
  {
    judul: "Kuis Pemrograman Web Bab 4",
    tipe: "Kuis",
    kelas: "X PPLG 2",
    dikerjakan: "33 / 33",
    status: "Selesai dinilai",
  },
  {
    judul: "Ujian Tengah Semester — Basis Data",
    tipe: "Pemasaran",
    kelas: "Pak Hendra",
    dikerjakan: "31",
    status: "Perlu dinilai",
  },
];

export const TUGAS_TERBARU = [
  { judul: "Laporan Analisis Pasar", kelas: "XI PM 1", terkumpul: "28 / 31", status: "Berjalan" },
  { judul: "Kuis Pemrograman Web Bab 4", kelas: "X PPLG 2", terkumpul: "33 / 33", status: "Selesai" },
];

// Full assignment list (Tugas menu) — same items as "Tugas terbaru" widget for now.
export const TUGAS_ROWS = TUGAS_TERBARU;

export const NILAI_ROWS = [
  { siswa: "Ahmad Fauzi", kuis: 90, ujian: 85, tugas: 88, rata: 87.7 },
  { siswa: "Nadya Putri", kuis: 95, ujian: 90, tugas: "—", rata: 92.5 },
  { siswa: "Bima Saputra", kuis: 78, ujian: 80, tugas: 75, rata: 77.7 },
];

// Materials shared by this teacher — mirrors the "Upload materi" feature card
// on the Ringkasan page. (Figma detail screen for this menu wasn't reachable
// this session due to a Figma API rate limit — update via the Figma link once
// available.)
export const MATERI_ROWS = [
  { judul: "Modul Strategi Pemasaran Bab 1-3", kelas: "X PM 1", jenis: "PDF", tanggal: "2 Sep 2026" },
  { judul: "Slide Pengelolaan Bisnis Ritel", kelas: "X PM 2", jenis: "PDF", tanggal: "5 Sep 2026" },
];
