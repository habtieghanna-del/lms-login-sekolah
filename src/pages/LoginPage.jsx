import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoMark from "../components/Logo";
import RingDecoration from "../components/RingDecoration";
import Footer from "../components/Footer";
import { ROLES } from "../roles";
import { login } from "../auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [roleId, setRoleId] = useState(ROLES[0].id);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const blockedRedirect = location.state?.from;

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const result = await login(email, password);

    setSubmitting(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    // Redirect based on the role tied to the account that just authenticated
    // (result.redirectTo), not the tab the user happened to have selected —
    // the tabs below are only there so testers can eyeball each dashboard.
    navigate(result.redirectTo);
  }

  return (
    <div className="min-h-screen w-full bg-[#0f1524] font-['Intel_One_Mono',_monospace] flex flex-col">
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left panel */}
        <div
          className="relative flex-1 overflow-hidden border-b border-[#8a8582] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-20"
          style={{
            backgroundImage:
              "linear-gradient(147.7deg, rgb(18, 34, 50) 0.96%, rgb(21, 51, 68) 72.3%)",
          }}
        >
          <RingDecoration />

          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <div className="text-[#38e0f2] text-xl sm:text-2xl leading-none">LMS SEKOLAH</div>
              <div className="text-[#38e0f2] text-base mt-1">Citra Eduflow</div>
            </div>
          </div>

          <div className="mt-[150px] max-w-[500px]">
            <p className="text-white text-3xl sm:text-[38px] leading-tight m-0">Welcome to the gate</p>
            <p className="text-[#38e0f2] text-3xl sm:text-[38px] leading-tight m-0">to reach your dreams</p>
          </div>

          <div className="mt-[70px] flex flex-wrap gap-3.5">
            {ROLES.map((role) => {
              const active = role.id === roleId;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setRoleId(role.id)}
                  className={
                    "rounded-full border-2 px-5 py-2 text-lg transition-colors cursor-pointer " +
                    (active
                      ? "bg-[#38e0f2] border-white text-white"
                      : "bg-[#122535] border-[#8a8582] text-[#8a8582] hover:border-[#38e0f2] hover:text-[#38e0f2]")
                  }
                  aria-pressed={active}
                >
                  {role.label}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-[#8a8582] max-w-[420px]">
            Demo: {roleId}@lms.sch.id / {roleId}123
          </p>
        </div>

        {/* Right panel */}
        <div className="flex-1 bg-[#0f1524] flex items-center p-8 sm:p-10 lg:p-16 lg:pt-[218px] lg:items-start">
          <form onSubmit={handleSubmit} className="w-full max-w-[582px]" noValidate>
            <h1 className="text-white text-3xl sm:text-4xl m-0">Masuk</h1>
            <p className="text-[#8a8582] text-lg sm:text-xl mt-2">
              Masukkan email dan password kamu.
            </p>

            {blockedRedirect && !error && (
              <p className="mt-4 rounded-[10px] border-2 border-[#f28f38] bg-[rgba(242,143,56,0.12)] px-4 py-3 text-[#f28f38] text-sm">
                Silakan login terlebih dahulu untuk mengakses halaman itu.
              </p>
            )}

            {error && (
              <p
                role="alert"
                className="mt-4 rounded-[10px] border-2 border-[#f25438] bg-[rgba(242,84,56,0.12)] px-4 py-3 text-[#f25438] text-sm"
              >
                {error}
              </p>
            )}

            <label className="block mt-8">
              <span className="block text-[#8a8582] text-lg sm:text-xl mb-2.5">Email</span>
              <input
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[58px] rounded-[10px] bg-[#122535] border-2 border-[#8a8582] px-4 text-white text-base focus:outline-none focus:border-[#38e0f2]"
              />
            </label>

            <label className="block mt-6">
              <span className="block text-[#8a8582] text-lg sm:text-xl mb-2.5">Password</span>
              <input
                type="password"
                required
                minLength={6}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[58px] rounded-[10px] bg-[#122535] border-2 border-[#8a8582] px-4 text-white text-base focus:outline-none focus:border-[#38e0f2]"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full h-[58px] rounded-[10px] border border-[#409ce9] text-[#0f1524] text-3xl cursor-pointer shadow-[2px_4px_13px_0px_rgba(194,110,243,0.47)] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                backgroundImage:
                  "linear-gradient(67.15deg, rgb(64, 156, 233) 11.67%, rgb(154, 181, 204) 62.6%, rgb(194, 110, 243) 93.98%)",
              }}
            >
              {submitting ? "Memeriksa..." : "Masuk"}
            </button>

            <p className="mt-4 text-[15px] text-[#8a8582] max-w-[476px] leading-snug">
              Sistem otomatis mengarahkan ke dashboard sesuai akun — bukan tab yang dipilih di
              sisi kiri.
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
