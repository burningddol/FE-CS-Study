import { Frame } from "./Frame";

export function TwosComplement() {
  const values = [
    { bits: "0000", dec: "0", angle: 90 },
    { bits: "0001", dec: "+1", angle: 67.5 },
    { bits: "0010", dec: "+2", angle: 45 },
    { bits: "0011", dec: "+3", angle: 22.5 },
    { bits: "0100", dec: "+4", angle: 0 },
    { bits: "0101", dec: "+5", angle: -22.5 },
    { bits: "0110", dec: "+6", angle: -45 },
    { bits: "0111", dec: "+7", angle: -67.5 },
    { bits: "1000", dec: "-8", angle: -90 },
    { bits: "1001", dec: "-7", angle: -112.5 },
    { bits: "1010", dec: "-6", angle: -135 },
    { bits: "1011", dec: "-5", angle: -157.5 },
    { bits: "1100", dec: "-4", angle: 180 },
    { bits: "1101", dec: "-3", angle: 157.5 },
    { bits: "1110", dec: "-2", angle: 135 },
    { bits: "1111", dec: "-1", angle: 112.5 },
  ];

  const cx = 250;
  const cy = 230;
  const r = 170;

  return (
    <Frame caption="4-bit 2의 보수 — 원을 닫으면 +/- 의 경계가 사라진다">
      <svg
        viewBox="0 0 500 460"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* wheel */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#1d1913"
          strokeWidth={1.4}
          strokeDasharray="4 3"
          opacity={0.5}
        />

        {/* divider — positive/negative */}
        <line
          x1={cx}
          y1={cy - r - 16}
          x2={cx}
          y2={cy + r + 16}
          stroke="#8f2d20"
          strokeWidth={1}
          opacity={0.45}
        />

        {/* labels for halves */}
        <text
          x={cx + 90}
          y={35}
          fill="#b3791f"
          fontFamily="var(--font-hand)"
          fontSize={22}
        >
          + 양수
        </text>
        <text
          x={cx - 145}
          y={35}
          fill="#b3791f"
          fontFamily="var(--font-hand)"
          fontSize={22}
        >
          음수 −
        </text>

        {values.map((v, i) => {
          const rad = (v.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy - r * Math.sin(rad);
          const labelR = r + 30;
          const lx = cx + labelR * Math.cos(rad);
          const ly = cy - labelR * Math.sin(rad);
          const isNeg = v.dec.startsWith("-");
          const isZero = v.dec === "0";
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={16}
                fill={isZero ? "#b3791f" : isNeg ? "#8f2d20" : "#3a5142"}
                stroke="#1d1913"
                strokeWidth={1.2}
                opacity={0.9}
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="#faf6eb"
                fontFamily="var(--font-mono)"
                fontSize={9}
              >
                {v.bits}
              </text>
              <text
                x={lx}
                y={ly + 4}
                textAnchor="middle"
                fill="#1d1913"
                fontFamily="var(--font-display)"
                fontStyle="italic"
                fontSize={14}
              >
                {v.dec}
              </text>
            </g>
          );
        })}

        {/* overflow arrow */}
        <path
          d={`M ${cx + r + 18} ${cy - 8} A ${r + 18} ${r + 18} 0 0 1 ${cx + r + 4} ${cy + 20}`}
          fill="none"
          stroke="#8f2d20"
          strokeWidth={1.6}
          markerEnd="url(#arrow-tc)"
        />
        <defs>
          <marker
            id="arrow-tc"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth={6}
            markerHeight={6}
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#8f2d20" />
          </marker>
        </defs>

        <text
          x={cx + r + 52}
          y={cy + 4}
          fill="#8f2d20"
          fontFamily="var(--font-hand)"
          fontSize={18}
          fontStyle="italic"
        >
          overflow
        </text>
        <text
          x={cx + r + 52}
          y={cy + 22}
          fill="#7a6e57"
          fontFamily="var(--font-hand)"
          fontSize={15}
        >
          +7 → -8
        </text>
      </svg>
    </Frame>
  );
}
