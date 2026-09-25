import { useNavigate } from "react-router-dom";
import { PageHead, StatCard, FeatureCard } from "../../components/ui";

export default function KepsekRingkasan() {
  const navigate = useNavigate();
  return (
    <>
      <PageHead title="Dashboard kepala sekolah" subtitle="Pantau performa sekolah secara menyeluruh." />
      <div className="flex gap-4.5 flex-wrap mb-8">
        <StatCard value="768" label="Total siswa" color="cyan" />
        <StatCard value="42" label="Total guru" color="purple" />
        <StatCard value="97%" label="Rata-rata kelulusan" color="green" />
        <StatCard value="5" label="Persetujuan menunggu" color="orange" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FeatureCard
          title="Performa akademik"
          desc="Lihat rata-rata nilai dan kehadiran per jurusan."
          onClick={() => navigate("/dashboard/kepsek/performa")}
        />
        <FeatureCard
          title="Data guru & siswa"
          desc="Ringkasan jumlah guru dan siswa per jurusan."
          onClick={() => navigate("/dashboard/kepsek/data")}
        />
        <FeatureCard
          title="Persetujuan"
          desc="Tinjau pengajuan yang menunggu persetujuanmu."
          onClick={() => navigate("/dashboard/kepsek/persetujuan")}
        />
        <FeatureCard
          title="Laporan sekolah"
          desc="Unduh laporan akademik dan keuangan sekolah."
          onClick={() => navigate("/dashboard/kepsek/laporan")}
        />
      </div>
    </>
  );
}
