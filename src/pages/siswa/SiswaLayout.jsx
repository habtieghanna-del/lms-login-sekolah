import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const NAV = [
  { label: "Ringkasan", to: "/dashboard/siswa/ringkasan" },
  { label: "Tugas saya", to: "/dashboard/siswa/tugas" },
  { label: "Nilai", to: "/dashboard/siswa/nilai" },
  { label: "Jadwal pelajaran", to: "/dashboard/siswa/jadwal" },
  { label: "Materi kelas", to: "/dashboard/siswa/materi" },
];

export default function SiswaLayout() {
  return (
    <div className="min-h-screen w-full bg-[#0f1524] text-white">
      <div className="flex">
        <Sidebar items={NAV} />
        <main className="flex-1 px-14 py-11">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
