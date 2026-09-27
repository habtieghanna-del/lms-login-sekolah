import { PageHead, OutlineButton, DataTable } from "@/components/ui";
import { MATERI_ROWS } from "@/data/guru";

export default function GuruMateri() {
  const rows = MATERI_ROWS.map((r) => [r.judul, r.kelas, r.jenis, r.tanggal]);
  return (
    <>
      <PageHead
        title="Materi"
        subtitle="Bagikan materi dalam bentuk PDF atau tautan untuk kelas kamu."
        action={<OutlineButton>+ Upload materi</OutlineButton>}
      />
      <DataTable columns={["Judul materi", "Kelas", "Jenis", "Tanggal upload"]} rows={rows} />
    </>
  );
}
