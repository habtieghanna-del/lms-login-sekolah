import { useNavigate } from "react-router-dom";
import { PageHead, FeatureCard, Pill, DataTable } from "../../components/ui";
import { TUGAS_TERBARU } from "../../data/guru";

export default function GuruRingkasan() {
  const navigate = useNavigate();
  const rows = TUGAS_TERBARU.map((t) => [
    t.judul,
    t.kelas,
    t.terkumpul,
    <Pill key="s" tone={t.status === "Berjalan" ? "cyan" : "purple"}>{t.status}</Pill>,
  ]);
  return (
    <>
      <PageHead
        title="Dashboard guru"
        subtitle="Kelola materi, tugas, dan penilaian untuk kelas kamu."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <FeatureCard
          title="Siswa & kelas"
          desc="Lihat daftar siswa per kelas yang kamu ajar."
          onClick={() => navigate("/dashboard/guru/siswa-kelas")}
        />
        <FeatureCard
          title="Assessmen"
          desc="Bikin kuis atau ujian online, lalu beri penilaian."
          onClick={() => navigate("/dashboard/guru/assessmen")}
        />
        <FeatureCard
          title="Upload materi"
          desc="Bagikan materi dalam bentuk PDF atau tautan."
          onClick={() => navigate("/dashboard/guru/materi")}
        />
        <FeatureCard
          title="Tugas"
          desc="Buat tugas baru dan lihat hasil kumpulan siswa."
          onClick={() => navigate("/dashboard/guru/tugas")}
        />
      </div>
      <h2 className="text-[#8a8582] text-2xl font-normal mb-2">Tugas terbaru</h2>
      <DataTable columns={["Judul tugas", "Kelas", "Terkumpul", "Status"]} rows={rows} />
    </>
  );
}
