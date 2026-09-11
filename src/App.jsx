import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminRingkasan from "./pages/admin/Ringkasan";
import KelasSiswa from "./pages/admin/KelasSiswa";
import GuruPelajaran from "./pages/admin/GuruPelajaran";
import AkunKepsek from "./pages/admin/AkunKepsek";
import AkunKurikulum from "./pages/admin/AkunKurikulum";

import GuruLayout from "./pages/guru/GuruLayout";
import GuruRingkasan from "./pages/guru/Ringkasan";
import GuruSiswaKelas from "./pages/guru/SiswaKelas";
import GuruAssessmen from "./pages/guru/Assessmen";
import GuruMateri from "./pages/guru/Materi";
import GuruTugas from "./pages/guru/Tugas";
import GuruNilai from "./pages/guru/Nilai";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/dashboard/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="ringkasan" replace />} />
        <Route path="ringkasan" element={<AdminRingkasan />} />
        <Route path="kelas-siswa" element={<KelasSiswa />} />
        <Route path="guru-pelajaran" element={<GuruPelajaran />} />
        <Route path="akun-kepsek" element={<AkunKepsek />} />
        <Route path="akun-kurikulum" element={<AkunKurikulum />} />
      </Route>

      <Route path="/dashboard/guru" element={<GuruLayout />}>
        <Route index element={<Navigate to="ringkasan" replace />} />
        <Route path="ringkasan" element={<GuruRingkasan />} />
        <Route path="siswa-kelas" element={<GuruSiswaKelas />} />
        <Route path="assessmen" element={<GuruAssessmen />} />
        <Route path="materi" element={<GuruMateri />} />
        <Route path="tugas" element={<GuruTugas />} />
        <Route path="nilai" element={<GuruNilai />} />
      </Route>

      {/* Roles not yet rebuilt from Figma use the generic placeholder dashboard */}
      <Route path="/dashboard/:roleId" element={<Dashboard />} />
    </Routes>
  );
}
