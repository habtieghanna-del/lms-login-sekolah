import { PageHead, DataTable } from "../../components/ui";
import { NILAI_SAYA_ROWS } from "../../data/siswa";

export default function SiswaNilai() {
  const rows = NILAI_SAYA_ROWS.map((n) => [n.pelajaran, n.kuis, n.ujian, n.tugas, n.rata]);
  return (
    <>
      <PageHead title="Nilai" subtitle="Rekap nilai kuis, ujian, dan tugas per mata pelajaran." />
      <DataTable columns={["Pelajaran", "Kuis", "Ujian", "Tugas", "Rata-rata"]} rows={rows} />
    </>
  );
}
