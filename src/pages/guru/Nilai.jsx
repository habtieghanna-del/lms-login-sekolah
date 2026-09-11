import { PageHead, Pill, DataTable } from "../../components/ui";
import { NILAI_ROWS } from "../../data/guru";

export default function GuruNilai() {
  const rows = NILAI_ROWS.map((r) => [
    r.siswa,
    r.kuis,
    r.ujian,
    r.tugas,
    <Pill key="r" tone="purple">{r.rata}</Pill>,
  ]);
  return (
    <>
      <PageHead
        title="Generate nilai"
        subtitle="Rekap nilai bisa difilter per mata pelajaran, per kelas, per jurusan."
      />
      <DataTable columns={["Siswa", "Kuis", "Ujian", "Tugas", "Rata-rata"]} rows={rows} />
    </>
  );
}
