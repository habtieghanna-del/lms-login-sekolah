import { PageHead, Pill, DataTable } from "../../components/ui";
import { MATERI_KELAS_ROWS } from "../../data/siswa";

export default function SiswaMateri() {
  const rows = MATERI_KELAS_ROWS.map((m) => [
    m.judul,
    m.pelajaran,
    <Pill key={m.judul} tone={m.jenis === "Video" ? "purple" : "cyan"}>{m.jenis}</Pill>,
    m.tanggal,
  ]);
  return (
    <>
      <PageHead title="Materi kelas" subtitle="Materi yang dibagikan guru untuk kelasmu." />
      <DataTable columns={["Judul", "Pelajaran", "Jenis", "Tanggal"]} rows={rows} />
    </>
  );
}
