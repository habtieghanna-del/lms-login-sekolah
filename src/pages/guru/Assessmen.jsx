import { PageHead, OutlineButton, Pill, DataTable } from "../../components/ui";
import { ASSESSMEN_ROWS } from "../../data/guru";

export default function GuruAssessmen() {
  const rows = ASSESSMEN_ROWS.map((r) => [
    r.judul,
    r.tipe,
    r.kelas,
    r.dikerjakan,
    <Pill key="s">{r.status}</Pill>,
  ]);
  return (
    <>
      <PageHead
        title="Assessmen"
        subtitle="Kuis dan ujian online yang sudah dibuat."
        action={<OutlineButton>+ Buat assessmen</OutlineButton>}
      />
      <DataTable columns={["Judul", "Tipe", "Kelas", "Sudah dikerjakan", ""]} rows={rows} />
    </>
  );
}
