import { PageHead, Pill, DataTable } from "../../components/ui";
import { SISWA_KELAS_ROWS } from "../../data/guru";

export default function GuruSiswaKelas() {
  const rows = SISWA_KELAS_ROWS.map(([kelas, jurusan, wali, jml]) => [
    kelas,
    jurusan,
    wali,
    jml,
    <Pill key="a">Lihat Kelas</Pill>,
  ]);
  return (
    <>
      <PageHead title="Siswa & kelas" subtitle="Data kelas dan siswa yang terdaftar." />
      <DataTable columns={["Kelas", "Jurusan", "Wali kelas", "Jumlah siswa", ""]} rows={rows} />
    </>
  );
}
