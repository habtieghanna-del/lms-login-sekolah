import { useNavigate } from "react-router-dom";
import { PageHead, StatCard, FeatureCard } from "../../components/ui";

export default function KurikulumRingkasan() {
  const navigate = useNavigate();
  return (
    <>
      <PageHead title="Dashboard kurikulum" subtitle="Susun dan pantau kurikulum setiap jenjang." />
      <div className="flex gap-4.5 flex-wrap mb-8">
        <StatCard value="16" label="Mata pelajaran" color="cyan" />
        <StatCard value="76" label="Modul aktif" color="purple" />
        <StatCard value="3" label="Revisi tertunda" color="orange" />
        <StatCard value="4" label="Jurusan terkelola" color="green" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FeatureCard
          title="Struktur kurikulum"
          desc="Lihat susunan mata pelajaran dan SKS per jurusan."
          onClick={() => navigate("/dashboard/kurikulum/struktur")}
        />
        <FeatureCard
          title="Bank materi"
          desc="Kelola modul dan materi ajar yang dipakai guru."
          onClick={() => navigate("/dashboard/kurikulum/bank-materi")}
        />
        <FeatureCard
          title="Kalender akademik"
          desc="Atur jadwal ujian, libur, dan kegiatan sekolah."
          onClick={() => navigate("/dashboard/kurikulum/kalender")}
        />
        <FeatureCard
          title="Evaluasi"
          desc="Tinjau dan beri catatan revisi materi ajar."
          onClick={() => navigate("/dashboard/kurikulum/evaluasi")}
        />
      </div>
    </>
  );
}
