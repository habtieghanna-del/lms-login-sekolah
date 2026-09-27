// Central definition of every role available in the LMS login tabs.
export const ROLES = [
  { id: "admin", label: "Admin", defaultPath: "/dashboard/admin/ringkasan" },
  { id: "guru", label: "Guru", defaultPath: "/dashboard/guru/ringkasan" },
  { id: "siswa", label: "Siswa", defaultPath: "/dashboard/siswa/ringkasan" },
  { id: "kepsek", label: "Kepsek", defaultPath: "/dashboard/kepsek/ringkasan" },
  { id: "kurikulum", label: "Kurikulum", defaultPath: "/dashboard/kurikulum/ringkasan" },
];

export const getRoleById = (id) => ROLES.find((r) => r.id === id);
