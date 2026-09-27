import { PageHead, DataTable } from "../../components/ui";
import { GURU_SISWA_ROWS } from "../../data/kepsek";

export default function KepsekData() {
  return (
    <>
      <PageHead title="Data guru & siswa" subtitle="Ringkasan jumlah guru dan siswa per jurusan." />
      <DataTable columns={["Jurusan", "Jumlah siswa", "Jumlah guru"]} rows={GURU_SISWA_ROWS} />
    </>
  );
}
