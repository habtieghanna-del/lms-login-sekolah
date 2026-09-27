import { PageHead, OutlineButton, Pill } from "../../components/ui";

const ACCOUNTS = [
  { name: "Bu Indah", email: "kurikulum@sekolah.sch.id" },
  { name: "Bu Ninda", email: "kurikulum@sekolah.sch.id" },
];

export default function AkunKurikulum() {
  return (
    <>
      <PageHead
        title="Akun pengawas kurikulum"
        subtitle="Kelola akun login untuk tim kurikulum. Akses dashboard kurikulum bersifat read-only."
        action={<OutlineButton>+ Tambah Kurikulum</OutlineButton>}
      />
      <p className="text-[#8a8582] text-lg -mt-2 mb-4">{ACCOUNTS.length} akun terdaftar</p>
      {ACCOUNTS.map((a) => (
        <div key={a.email + a.name} className="flex justify-between items-center py-4 max-w-[900px]">
          <div>
            <div className="text-[#d9d9d9] text-lg mb-1">{a.name}</div>
            <div className="text-[#8a8582] text-base">{a.email}</div>
          </div>
          <div className="flex gap-3">
            <Pill tone="green">Aktif</Pill>
            <Pill tone="red">Hapus</Pill>
          </div>
        </div>
      ))}
    </>
  );
}
