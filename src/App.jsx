import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

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

import SiswaLayout from "./pages/siswa/SiswaLayout";
import SiswaRingkasan from "./pages/siswa/Ringkasan";
import SiswaTugas from "./pages/siswa/Tugas";
import SiswaNilai from "./pages/siswa/Nilai";
import SiswaJadwal from "./pages/siswa/Jadwal";
import SiswaMateri from "./pages/siswa/Materi";

import KepsekLayout from "./pages/kepsek/KepsekLayout";
import KepsekRingkasan from "./pages/kepsek/Ringkasan";
import KepsekPerforma from "./pages/kepsek/Performa";
import KepsekData from "./pages/kepsek/DataGuruSiswa";
import KepsekPersetujuan from "./pages/kepsek/Persetujuan";
import KepsekLaporan from "./pages/kepsek/Laporan";

import KurikulumLayout from "./pages/kurikulum/KurikulumLayout";
import KurikulumRingkasan from "./pages/kurikulum/Ringkasan";
import KurikulumStruktur from "./pages/kurikulum/Struktur";
import KurikulumBankMateri from "./pages/kurikulum/BankMateri";
import KurikulumKalender from "./pages/kurikulum/Kalender";
import KurikulumEvaluasi from "./pages/kurikulum/Evaluasi";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/dashboard/admin"
        element={
          <ProtectedRoute roleId="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="ringkasan" replace />} />
        <Route path="ringkasan" element={<AdminRingkasan />} />
        <Route path="kelas-siswa" element={<KelasSiswa />} />
        <Route path="guru-pelajaran" element={<GuruPelajaran />} />
        <Route path="akun-kepsek" element={<AkunKepsek />} />
        <Route path="akun-kurikulum" element={<AkunKurikulum />} />
      </Route>

      <Route
        path="/dashboard/guru"
        element={
          <ProtectedRoute roleId="guru">
            <GuruLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="ringkasan" replace />} />
        <Route path="ringkasan" element={<GuruRingkasan />} />
        <Route path="siswa-kelas" element={<GuruSiswaKelas />} />
        <Route path="assessmen" element={<GuruAssessmen />} />
        <Route path="materi" element={<GuruMateri />} />
        <Route path="tugas" element={<GuruTugas />} />
        <Route path="nilai" element={<GuruNilai />} />
      </Route>

      <Route
        path="/dashboard/siswa"
        element={
          <ProtectedRoute roleId="siswa">
            <SiswaLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="ringkasan" replace />} />
        <Route path="ringkasan" element={<SiswaRingkasan />} />
        <Route path="tugas" element={<SiswaTugas />} />
        <Route path="nilai" element={<SiswaNilai />} />
        <Route path="jadwal" element={<SiswaJadwal />} />
        <Route path="materi" element={<SiswaMateri />} />
      </Route>

      <Route
        path="/dashboard/kepsek"
        element={
          <ProtectedRoute roleId="kepsek">
            <KepsekLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="ringkasan" replace />} />
        <Route path="ringkasan" element={<KepsekRingkasan />} />
        <Route path="performa" element={<KepsekPerforma />} />
        <Route path="data" element={<KepsekData />} />
        <Route path="persetujuan" element={<KepsekPersetujuan />} />
        <Route path="laporan" element={<KepsekLaporan />} />
      </Route>

      <Route
        path="/dashboard/kurikulum"
        element={
          <ProtectedRoute roleId="kurikulum">
            <KurikulumLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="ringkasan" replace />} />
        <Route path="ringkasan" element={<KurikulumRingkasan />} />
        <Route path="struktur" element={<KurikulumStruktur />} />
        <Route path="bank-materi" element={<KurikulumBankMateri />} />
        <Route path="kalender" element={<KurikulumKalender />} />
        <Route path="evaluasi" element={<KurikulumEvaluasi />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
