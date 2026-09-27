import { PageHead, OutlineButton, Pill, DataTable } from "../../components/ui";
import { KELAS_ROWS } from "../../data/admin";

export default function KelasSiswa() {
  const rows = KELAS_ROWS.map(([kelas, jurusan, wali, jml]) => [
    kelas,
    jurusan,
    wali,
    jml,
    <Pill key="a">Kelola siswa</Pill>,
  ]);
  return (
    <>
      <PageHead
        title="Kelas & siswa"
        subtitle="Data kelas dan siswa yang terdaftar."
        action={<OutlineButton>+ Tambah kelas</OutlineButton>}
      />
      <DataTable columns={["Kelas", "Jurusan", "Wali kelas", "Jumlah siswa", ""]} rows={rows} />
    </>
  );
}
