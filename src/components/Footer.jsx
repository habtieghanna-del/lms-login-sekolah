import LogoMark from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#153344] px-8 py-10 sm:px-16 font-['Intel_One_Mono',_monospace]">
      <div className="flex flex-wrap gap-10 justify-between">
        <div className="max-w-[260px]">
          <div className="flex items-center gap-2">
            <LogoMark size={36} />
            <span className="text-[#38e0f2] text-lg">LMS SEKOLAH</span>
          </div>
          <p className="text-white text-xs mt-3">
            Learn Better. Create Together. Grow Every Day.
          </p>
        </div>

        <FooterColumn title="Navigation" items={["Home", "Features", "Classes", "About Us"]} />
        <FooterColumn
          title="Support"
          items={["FAQ", "Help Center", "Privacy Policy", "Terms & Conditions"]}
        />
        <FooterColumn
          title="Contact Us"
          items={["support@cnclms.com", "+62 890 6767 2121", "Depok, Indonesia"]}
        />
      </div>
      <p className="text-center text-white text-xs mt-10">© 2026 LMS. All Rights Reserved.</p>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="text-white text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-white text-xs">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
