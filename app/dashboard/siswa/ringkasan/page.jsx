"use client";

import { useRouter } from "next/navigation";
import { PageHead, StatCard, FeatureCard } from "@/components/ui";

export default function SiswaRingkasan() {
  const router = useRouter();
  return (
    <>
      <PageHead title="Dashboard siswa" subtitle="Pantau tugas, nilai, dan jadwal belajarmu." />
      <div className="flex gap-4.5 flex-wrap mb-8">
        <StatCard value="4" label="Tugas aktif" color="cyan" />
        <StatCard value="88" label="Rata-rata nilai" color="purple" />
        <StatCard value="96%" label="Kehadiran" color="green" />
        <StatCard value="XI PPLG 2" label="Kelas" color="orange" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FeatureCard
          title="Tugas saya"
          desc="Lihat tugas yang perlu dikumpulkan dan yang sudah dinilai."
          onClick={() => router.push("/dashboard/siswa/tugas")}
        />
        <FeatureCard
          title="Nilai"
          desc="Cek nilai kuis, ujian, dan tugas per mata pelajaran."
          onClick={() => router.push("/dashboard/siswa/nilai")}
        />
        <FeatureCard
          title="Jadwal pelajaran"
          desc="Lihat jadwal kelas per hari."
          onClick={() => router.push("/dashboard/siswa/jadwal")}
        />
        <FeatureCard
          title="Materi kelas"
          desc="Unduh materi yang dibagikan guru."
          onClick={() => router.push("/dashboard/siswa/materi")}
        />
      </div>
    </>
  );
}
