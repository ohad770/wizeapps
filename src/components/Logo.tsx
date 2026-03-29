export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="180"
      viewBox="0 0 480 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="WizeApps logo"
    >
      {/* Mark: W base + A overlay */}
      <g transform="translate(14, 18)">
        <path
          d="M0 0 L20 60 L40 14 L60 60 L80 0"
          fill="none"
          stroke="#111"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 60 L40 14 L60 60"
          fill="none"
          stroke="#7F77DD"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Wordmark */}
      <text
        x="120"
        y="62"
        fontFamily="Inter, -apple-system, system-ui, sans-serif"
        fontSize="42"
        letterSpacing="-1.2"
      >
        <tspan fontWeight="600" fill="#111">
          Wize
        </tspan>
        <tspan dx="5" fontWeight="400" fill="#888">
          Apps
        </tspan>
      </text>
    </svg>
  );
}
