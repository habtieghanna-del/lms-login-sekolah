import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const NAV = [
  { label: "Ringkasan", to: "/dashboard/kurikulum/ringkasan" },
  { label: "Struktur kurikulum", to: "/dashboard/kurikulum/struktur" },
  { label: "Bank materi", to: "/dashboard/kurikulum/bank-materi" },
  { label: "Kalender akademik", to: "/dashboard/kurikulum/kalender" },
  { label: "Evaluasi", to: "/dashboard/kurikulum/evaluasi" },
];

export default function KurikulumLayout() {
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
