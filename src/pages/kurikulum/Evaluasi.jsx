import { PageHead, Pill, DataTable } from "../../components/ui";
import { EVALUASI_ROWS } from "../../data/kurikulum";

export default function KurikulumEvaluasi() {
  const rows = EVALUASI_ROWS.map((e) => [
    e.mapel,
    e.jurusan,
    <Pill key={e.mapel} tone={e.status === "Disetujui" ? "green" : "red"}>{e.status}</Pill>,
    e.catatan,
  ]);
  return (
    <>
      <PageHead title="Evaluasi" subtitle="Status tinjauan materi ajar dan catatan revisi." />
      <DataTable columns={["Mata pelajaran", "Jurusan", "Status", "Catatan"]} rows={rows} />
    </>
  );
}
