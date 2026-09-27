import { PageHead, OutlineButton, DataTable } from "../../components/ui";
import { BANK_MATERI_ROWS } from "../../data/kurikulum";

export default function KurikulumBankMateri() {
  const rows = BANK_MATERI_ROWS.map((m) => [
    m.judul,
    m.jurusan,
    m.versi,
    m.diperbarui,
    <OutlineButton key={m.judul}>Lihat</OutlineButton>,
  ]);
  return (
    <>
      <PageHead title="Bank materi" subtitle="Modul dan materi ajar yang dipakai guru di kelas." />
      <DataTable columns={["Judul modul", "Jurusan", "Versi", "Diperbarui", ""]} rows={rows} />
    </>
  );
}
