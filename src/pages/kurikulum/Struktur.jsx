import { PageHead, DataTable } from "../../components/ui";
import { STRUKTUR_ROWS } from "../../data/kurikulum";

export default function KurikulumStruktur() {
  const rows = STRUKTUR_ROWS.map((s) => [s.jurusan, s.jenjang, s.totalMapel, s.sks]);
  return (
    <>
      <PageHead title="Struktur kurikulum" subtitle="Susunan mata pelajaran dan beban SKS per jurusan." />
      <DataTable columns={["Jurusan", "Jenjang", "Total mapel", "Total SKS"]} rows={rows} />
    </>
  );
}
