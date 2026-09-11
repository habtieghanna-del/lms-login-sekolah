export function PageHead({ title, subtitle, action }) {
  return (
    <div className="flex justify-between items-start flex-wrap gap-4 mb-9">
      <div className="flex gap-4">
        <div
          className="w-2 rounded-[10px] self-stretch"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #409ce9 7%, #9ab5cc 71%, #c26ef3 99%)",
          }}
        />
        <div>
          <h1 className="text-white text-[36px] font-normal m-0">{title}</h1>
          <p className="text-[#8a8582] text-lg m-0 mt-1 max-w-[700px]">{subtitle}</p>
        </div>
      </div>
      {action}
    </div>
  );
}

export function OutlineButton({ children, ...props }) {
  return (
    <button
      className="border-2 border-[#38e0f2] bg-[rgba(64,156,233,0.34)] text-[#38e0f2] rounded-full px-5 py-2 text-lg whitespace-nowrap cursor-pointer font-['Intel_One_Mono',_monospace]"
      {...props}
    >
      {children}
    </button>
  );
}

const statColors = {
  cyan: { border: "border-[#38e0f2]", text: "text-[#38e0f2]" },
  purple: { border: "border-[#bd38f2]", text: "text-[#bd38f2]" },
  green: { border: "border-[#38f254]", text: "text-[#38f254]" },
  orange: { border: "border-[#f28f38]", text: "text-[#f28f38]" },
};

export function StatCard({ value, label, color = "cyan" }) {
  const c = statColors[color];
  return (
    <div className={`bg-[#122535] rounded-[10px] p-5 pb-4 flex-1 min-w-[190px] border-t-4 ${c.border}`}>
      <div className={`text-[44px] leading-none ${c.text}`}>{value}</div>
      <div className="text-[#8a8582] text-[15px] mt-2">{label}</div>
    </div>
  );
}

export function FeatureCard({ title, desc, to, onClick }) {
  const Comp = to ? "a" : "div";
  return (
    <div
      onClick={onClick}
      className="bg-[#122535] border border-[rgba(56,224,242,0.44)] rounded-[10px] p-6 relative overflow-hidden cursor-pointer"
    >
      <div className="absolute top-0 left-[12%] right-[12%] h-[9px] rounded bg-[#38e0f2]" />
      <div className="w-[55px] h-[55px] rounded-[10px] bg-[#0f1524] border border-[rgba(56,224,242,0.44)] mb-3.5" />
      <h3 className="text-[22px] font-normal text-white m-0 mb-2.5">{title}</h3>
      <p className="text-[#8a8582] text-[15px] m-0 mb-5">{desc}</p>
      <span className="text-[#38e0f2] font-bold text-[15px]">Buka &rarr;</span>
    </div>
  );
}

export function Pill({ children, tone = "cyan", ...props }) {
  const tones = {
    cyan: "border-[#38e0f2] bg-[rgba(64,156,233,0.34)] text-[#38e0f2]",
    green: "border-[#38f254] bg-[rgba(56,242,84,0.44)] text-[#38f254]",
    red: "border-[#f25438] bg-[rgba(242,84,56,0.44)] text-[#f25438]",
    purple: "border-[#c26ef3] bg-[rgba(189,56,242,0.44)] text-[#c26ef3]",
  };
  return (
    <span
      className={`inline-block border-2 rounded-full px-[18px] py-1.5 text-[15px] cursor-pointer ${tones[tone]}`}
      {...props}
    >
      {children}
    </span>
  );
}

export function DataTable({ columns, rows }) {
  return (
    <table className="w-full border-collapse mt-2.5 font-['Intel_One_Mono',_monospace]">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c} className="text-left text-[#8a8582] font-normal text-base py-2.5 px-3 first:pl-0">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="py-3 px-3 text-base text-[#d9d9d9] first:pl-0">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
