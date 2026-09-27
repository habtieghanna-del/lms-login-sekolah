import { PageHead, OutlineButton, Pill } from "../../components/ui";

export default function AkunKepsek() {
  return (
    <>
      <PageHead
        title="Akun kepala sekolah"
        subtitle="Kelola akun login untuk kepala sekolah. Akses dashboard kepsek bersifat read-only."
        action={<OutlineButton>+ Tambah Kepsek</OutlineButton>}
      />
      <p className="text-[#8a8582] text-lg -mt-2 mb-4">1 akun terdaftar</p>
      <div className="flex justify-between items-center py-4 max-w-[900px]">
        <div>
          <div className="text-[#d9d9d9] text-lg mb-1">Bpk. Santoso</div>
          <div className="text-[#8a8582] text-base">kepsek@sekolah.sch.id</div>
        </div>
        <div className="flex gap-3">
          <Pill tone="green">Aktif</Pill>
          <Pill tone="red">Hapus</Pill>
        </div>
      </div>
    </>
  );
}
