import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import LogoMark from "../components/Logo";
import Footer from "../components/Footer";

// Placeholder content for roles not yet rebuilt pixel-accurately from Figma
// (Siswa, Kepsek, Kurikulum). Replace with real Figma data when available.
const FALLBACK = {
  siswa: {
    title: "Dashboard Siswa",
    greeting: "Pantau tugas, nilai, dan jadwal belajarmu.",
    menu: ["Ringkasan", "Tugas Saya", "Nilai", "Jadwal Pelajaran", "Materi Kelas"],
    stats: [
      { label: "Tugas Aktif", value: "4" },
      { label: "Rata-rata Nilai", value: "88" },
      { label: "Kehadiran", value: "96%" },
      { label: "Kelas", value: "XI IPA 2" },
    ],
  },
  kepsek: {
    title: "Dashboard Kepala Sekolah",
    greeting: "Pantau performa sekolah secara menyeluruh.",
    menu: ["Ringkasan", "Performa Akademik", "Data Guru & Siswa", "Persetujuan", "Laporan Sekolah"],
    stats: [
      { label: "Total Siswa", value: "768" },
      { label: "Total Guru", value: "42" },
      { label: "Rata-rata Kelulusan", value: "97%" },
      { label: "Persetujuan Menunggu", value: "5" },
    ],
  },
  kurikulum: {
    title: "Dashboard Kurikulum",
    greeting: "Susun dan pantau kurikulum setiap jenjang.",
    menu: ["Ringkasan", "Struktur Kurikulum", "Bank Materi", "Kalender Akademik", "Evaluasi"],
    stats: [
      { label: "Mata Pelajaran", value: "16" },
      { label: "Modul Aktif", value: "76" },
      { label: "Revisi Tertunda", value: "3" },
      { label: "Jenjang Terkelola", value: "3" },
    ],
  },
};

export default function Dashboard() {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const role = FALLBACK[roleId];
  const [activeMenu, setActiveMenu] = useState(0);

  if (!role) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen w-full bg-[#0f1524] font-['Intel_One_Mono',_monospace] flex flex-col text-white">
      <div className="flex flex-1">
        <aside className="w-[240px] shrink-0 border-r border-[#8a8582] p-6 hidden md:flex md:flex-col">
          <div className="flex items-center gap-2 mb-10">
            <LogoMark size={36} />
            <span className="text-[#38e0f2] text-base leading-tight">LMS SEKOLAH</span>
          </div>

          <nav className="flex-1 space-y-1">
            {role.menu.map((item, i) => (
              <button
                key={item}
                onClick={() => setActiveMenu(i)}
                className={
                  "w-full text-left px-4 py-3 rounded-lg text-sm transition-colors cursor-pointer " +
                  (i === activeMenu
                    ? "bg-[#38e0f2] text-[#0f1524]"
                    : "text-[#8a8582] hover:bg-[#122535] hover:text-white")
                }
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => navigate("/")}
            className="w-full px-4 py-3 rounded-lg border border-[#8a8582] text-sm text-[#8a8582] hover:border-[#f27979] hover:text-[#f27979] cursor-pointer"
          >
            &larr; exit
          </button>
        </aside>

        <main className="flex-1 p-6 sm:p-10">
          <p className="text-[#38e0f2] text-sm">{role.menu[activeMenu]}</p>
          <h1 className="text-3xl sm:text-4xl mt-2">{role.title}</h1>
          <p className="text-[#8a8582] text-lg mt-2 max-w-[560px]">{role.greeting}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {role.stats.map((stat) => (
              <div key={stat.label} className="rounded-[10px] border-2 border-[#8a8582] bg-[#122535] p-5">
                <p className="text-[#8a8582] text-xs sm:text-sm">{stat.label}</p>
                <p className="text-2xl sm:text-3xl mt-2">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[10px] border-2 border-[#8a8582] bg-[#122535] p-6 sm:p-8">
            <p className="text-lg sm:text-xl">{role.menu[activeMenu]}</p>
            <p className="text-[#8a8582] text-sm mt-3 max-w-[520px]">
              Halaman ini belum dikonversi pixel-perfect dari Figma untuk role ini. Hubungi saya
              untuk melanjutkan role ini juga.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
