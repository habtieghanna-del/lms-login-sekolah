import { PageHead, OutlineButton, Pill, DataTable } from "@/components/ui";
import { TUGAS_ROWS } from "@/data/guru";

export default function GuruTugas() {
  const rows = TUGAS_ROWS.map((t) => [
    t.judul,
    t.kelas,
    t.terkumpul,
    <Pill key="s" tone={t.status === "Berjalan" ? "cyan" : "purple"}>{t.status}</Pill>,
  ]);
  return (
    <>
      <PageHead
        title="Tugas"
        subtitle="Buat tugas baru dan lihat hasil kumpulan siswa."
        action={<OutlineButton>+ Buat tugas</OutlineButton>}
      />
      <DataTable columns={["Judul tugas", "Kelas", "Terkumpul", "Status"]} rows={rows} />
    </>
  );
}
