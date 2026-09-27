import { PageHead, Pill, DataTable } from "../../components/ui";
import { PERSETUJUAN_ROWS } from "../../data/kepsek";

const TONE = { Menunggu: "cyan", Disetujui: "green", Ditolak: "red" };

export default function KepsekPersetujuan() {
  const rows = PERSETUJUAN_ROWS.map((p) => [
    p.judul,
    p.jenis,
    p.diajukan,
    <Pill key={p.judul} tone={TONE[p.status] || "cyan"}>{p.status}</Pill>,
  ]);
  return (
    <>
      <PageHead title="Persetujuan" subtitle="Pengajuan yang perlu ditinjau atau sudah diputuskan." />
      <DataTable columns={["Judul", "Jenis", "Diajukan", "Status"]} rows={rows} />
    </>
  );
}
