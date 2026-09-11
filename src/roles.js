// Central definition of every role available in the LMS login tabs.
export const ROLES = [
  { id: "admin", label: "Admin", defaultPath: "/dashboard/admin/ringkasan" },
  { id: "guru", label: "Guru", defaultPath: "/dashboard/guru/ringkasan" },
  { id: "siswa", label: "Siswa", defaultPath: "/dashboard/siswa" },
  { id: "kepsek", label: "Kepsek", defaultPath: "/dashboard/kepsek" },
  { id: "kurikulum", label: "Kurikulum", defaultPath: "/dashboard/kurikulum" },
];

export const getRoleById = (id) => ROLES.find((r) => r.id === id);
