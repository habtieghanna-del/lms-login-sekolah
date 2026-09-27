import { useNavigate } from "react-router-dom";
import { PageHead, StatCard, FeatureCard } from "../../components/ui";

export default function AdminRingkasan() {
  const navigate = useNavigate();
  return (
    <>
      <PageHead title="Dashboard admin" subtitle="Kelola data master sekolah dan akun pengguna." />
      <div className="flex gap-4.5 flex-wrap mb-8">
        <StatCard value="24" label="Total kelas" color="cyan" />
        <StatCard value="768" label="Total siswa" color="purple" />
        <StatCard value="42" label="Total guru" color="green" />
        <StatCard value="16" label="Mata pelajaran" color="orange" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FeatureCard
          title="Manajemen kelas & siswa"
          desc="Tambah, edit, dan atur data kelas beserta siswanya."
          onClick={() => navigate("/dashboard/admin/kelas-siswa")}
        />
        <FeatureCard
          title="Manajemen guru & pelajaran"
          desc="Tambah, edit data guru dan mata pelajaran yang diampu."
          onClick={() => navigate("/dashboard/admin/guru-pelajaran")}
        />
        <FeatureCard
          title="Akun kepsek"
          desc="Buat dan kelola akun untuk kepala sekolah."
          onClick={() => navigate("/dashboard/admin/akun-kepsek")}
        />
        <FeatureCard
          title="Akun kurikulum"
          desc="Buat dan kelola akun untuk tim kurikulum"
          onClick={() => navigate("/dashboard/admin/akun-kurikulum")}
        />
      </div>
    </>
  );
}
