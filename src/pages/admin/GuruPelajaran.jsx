import { PageHead, OutlineButton, Pill, DataTable } from "../../components/ui";
import { GURU_ROWS } from "../../data/admin";

export default function GuruPelajaran() {
  const rows = GURU_ROWS.map(([nama, mapel, jurusan, email]) => [
    nama,
    mapel,
    jurusan,
    email,
    <Pill key="a">Edit</Pill>,
  ]);
  return (
    <>
      <PageHead
        title="Guru & pelajaran"
        subtitle="Data guru dan mata pelajaran yang diampu."
        action={<OutlineButton>+ Tambah guru</OutlineButton>}
      />
      <DataTable columns={["Nama guru", "Mata pelajaran", "Jurusan", "Email", ""]} rows={rows} />
    </>
  );
}
