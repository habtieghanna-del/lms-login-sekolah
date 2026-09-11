export default function LogoMark({ size = 51, color = "#38e0f2" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="30"
        height="30"
        rx="4"
        transform="rotate(15 25.5 25.5)"
        stroke={color}
        strokeWidth="2.5"
      />
      <rect
        x="16"
        y="16"
        width="18"
        height="18"
        rx="3"
        transform="rotate(-10 25 25)"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
}
