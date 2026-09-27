import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const NAV = [
  { label: "Ringkasan", to: "/dashboard/guru/ringkasan" },
  { label: "Siswa & kelas", to: "/dashboard/guru/siswa-kelas" },
  { label: "Assessmen", to: "/dashboard/guru/assessmen" },
  { label: "Materi", to: "/dashboard/guru/materi" },
  { label: "Tugas", to: "/dashboard/guru/tugas" },
  { label: "Nilai", to: "/dashboard/guru/nilai" },
];

export default function GuruLayout() {
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
