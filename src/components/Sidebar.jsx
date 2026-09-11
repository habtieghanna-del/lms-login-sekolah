import { NavLink, useNavigate } from "react-router-dom";
import LogoMark from "./Logo";

export default function Sidebar({ items }) {
  const navigate = useNavigate();
  return (
    <aside
      className="w-[406px] shrink-0 border-r border-[#8a8582] flex flex-col font-['Intel_One_Mono',_monospace]"
      style={{
        backgroundImage:
          "linear-gradient(130.24deg, rgb(18, 34, 50) 0.96%, rgb(21, 51, 68) 72.3%)",
      }}
    >
      <div className="flex items-center gap-3 pt-[17px] pl-[11px]">
        <LogoMark size={51} />
        <span className="text-[#38e0f2] text-2xl leading-none">LMS SEKOLAH</span>
      </div>
      <hr className="border-t border-[#8a8582] opacity-60 mt-5" />

      <nav className="mt-3 flex-1">
        {items.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              "flex items-center gap-4 px-8 py-4 text-[26px] cursor-pointer " +
              (isActive
                ? "bg-[rgba(64,156,233,0.34)] text-[#38e0f2] border-r-[3px] border-[#38e0f2]"
                : "text-[#8a8582] hover:text-white")
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={
                    "w-[7px] h-[7px] rounded-full flex-none " +
                    (isActive ? "bg-[#38e0f2] shadow-[0_0_8px_#38e0f2]" : "bg-[#8a8582]")
                  }
                />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => navigate("/")}
        className="text-left px-[39px] pb-6 pt-4 text-[#8a8582] text-lg cursor-pointer hover:text-[#f27979]"
      >
        &larr; exit
      </button>
    </aside>
  );
}
