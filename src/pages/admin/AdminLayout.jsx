import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const NAV = [
  { label: "Ringkasan", to: "/dashboard/admin/ringkasan" },
  { label: "Kelas & siswa", to: "/dashboard/admin/kelas-siswa" },
  { label: "Guru & pelajaran", to: "/dashboard/admin/guru-pelajaran" },
  { label: "Akun kepsek", to: "/dashboard/admin/akun-kepsek" },
  { label: "Akun kurikulum", to: "/dashboard/admin/akun-kurikulum" },
];

export default function AdminLayout() {
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
