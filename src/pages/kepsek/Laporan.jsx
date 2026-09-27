import { PageHead, OutlineButton, DataTable } from "../../components/ui";
import { LAPORAN_ROWS } from "../../data/kepsek";

export default function KepsekLaporan() {
  const rows = LAPORAN_ROWS.map((l) => [
    l.judul,
    l.periode,
    l.tanggal,
    <OutlineButton key={l.judul}>Unduh</OutlineButton>,
  ]);
  return (
    <>
      <PageHead title="Laporan sekolah" subtitle="Laporan akademik dan keuangan yang tersedia." />
      <DataTable columns={["Judul laporan", "Periode", "Tanggal terbit", ""]} rows={rows} />
    </>
  );
}
