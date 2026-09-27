import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { getServerSession } from "@/lib/get-auth";

const NAV = [
  { label: "Ringkasan", to: "/dashboard/kepsek/ringkasan" },
  { label: "Performa akademik", to: "/dashboard/kepsek/performa" },
  { label: "Data guru & siswa", to: "/dashboard/kepsek/data" },
  { label: "Persetujuan", to: "/dashboard/kepsek/persetujuan" },
  { label: "Laporan sekolah", to: "/dashboard/kepsek/laporan" },
];

export default function KepsekLayout({ children }) {
  const session = getServerSession();
  if (!session || session.roleId !== "kepsek") {
    redirect("/?from=/dashboard/kepsek");
  }

  return (
    <div className="min-h-screen w-full bg-[#0f1524] text-white">
      <div className="flex">
        <Sidebar items={NAV} />
        <main className="flex-1 px-14 py-11">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
