import { PageHead, DataTable } from "../../components/ui";
import { JADWAL_ROWS } from "../../data/siswa";

export default function SiswaJadwal() {
  const rows = JADWAL_ROWS.map((j) => [j.hari, j.jam, j.pelajaran, j.guru]);
  return (
    <>
      <PageHead title="Jadwal pelajaran" subtitle="Jadwal kelas kamu minggu ini." />
      <DataTable columns={["Hari", "Jam", "Pelajaran", "Guru"]} rows={rows} />
    </>
  );
}
