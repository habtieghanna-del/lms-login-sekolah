import { PageHead, Pill, DataTable } from "../../components/ui";
import { TUGAS_SAYA_ROWS } from "../../data/siswa";

const TONE = {
  "Belum dikumpulkan": "red",
  "Sudah dinilai": "green",
  Berjalan: "cyan",
};

export default function SiswaTugas() {
  const rows = TUGAS_SAYA_ROWS.map((t) => [
    t.judul,
    t.pelajaran,
    t.tenggat,
    <Pill key={t.judul} tone={TONE[t.status] || "cyan"}>{t.status}</Pill>,
  ]);
  return (
    <>
      <PageHead title="Tugas saya" subtitle="Daftar tugas dari semua mata pelajaran." />
      <DataTable columns={["Judul tugas", "Pelajaran", "Tenggat", "Status"]} rows={rows} />
    </>
  );
}
