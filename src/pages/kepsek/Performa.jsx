import { PageHead, DataTable } from "../../components/ui";
import { PERFORMA_ROWS } from "../../data/kepsek";

export default function KepsekPerforma() {
  const rows = PERFORMA_ROWS.map((p) => [p.jurusan, p.rataNilai, p.kehadiran, p.kelulusan]);
  return (
    <>
      <PageHead title="Performa akademik" subtitle="Rata-rata nilai, kehadiran, dan kelulusan per jurusan." />
      <DataTable columns={["Jurusan", "Rata-rata nilai", "Kehadiran", "Kelulusan"]} rows={rows} />
    </>
  );
}
