import { PageHead, DataTable } from "../../components/ui";
import { KALENDER_ROWS } from "../../data/kurikulum";

export default function KurikulumKalender() {
  const rows = KALENDER_ROWS.map((k) => [k.kegiatan, k.tanggal]);
  return (
    <>
      <PageHead title="Kalender akademik" subtitle="Jadwal ujian, libur, dan kegiatan sekolah tahun ajaran ini." />
      <DataTable columns={["Kegiatan", "Tanggal"]} rows={rows} />
    </>
  );
}
