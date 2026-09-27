export default function RingDecoration() {
  return (
    <div className="pointer-events-none absolute right-[80px] top-[66px] hidden lg:block">
      <svg width="180" height="180" viewBox="0 0 180 180" fill="none" aria-hidden="true">
        <circle cx="100" cy="50" r="49" stroke="#e7e7e7" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="83" cy="92" r="29" stroke="#e7e7e7" strokeOpacity="0.4" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
