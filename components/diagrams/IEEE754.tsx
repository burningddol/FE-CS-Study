import { Frame } from "./Frame";

export function IEEE754() {
  const segments = [
    { label: "부호", subLabel: "sign", width: 20, color: "#8f2d20", count: 1 },
    {
      label: "지수",
      subLabel: "exponent",
      width: 160,
      color: "#b3791f",
      count: 11,
    },
    {
      label: "가수",
      subLabel: "mantissa · fraction",
      width: 360,
      color: "#3a5142",
      count: 52,
    },
  ];

  let offsetX = 30;

  return (
    <Frame caption="IEEE 754 double-precision — 64 bit의 내부 구조">
      <svg
        viewBox="0 0 600 220"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* segments */}
        {segments.map((seg, i) => {
          const x = offsetX;
          offsetX += seg.width;
          return (
            <g key={i}>
              <rect
                x={x}
                y={70}
                width={seg.width}
                height={55}
                fill={seg.color}
                stroke="#1d1913"
                strokeWidth={1.3}
                rx={2}
                opacity={0.92}
              />
              <text
                x={x + seg.width / 2}
                y={104}
                textAnchor="middle"
                fill="#faf6eb"
                fontFamily="var(--font-display)"
                fontStyle="italic"
                fontSize={18}
                fontWeight={500}
              >
                {seg.count} bits
              </text>
              <text
                x={x + seg.width / 2}
                y={55}
                textAnchor="middle"
                fill="#1d1913"
                fontFamily="var(--font-display)"
                fontSize={14}
                fontWeight={600}
              >
                {seg.label}
              </text>
              <text
                x={x + seg.width / 2}
                y={145}
                textAnchor="middle"
                fill="#7a6e57"
                fontFamily="var(--font-hand)"
                fontSize={15}
              >
                {seg.subLabel}
              </text>
            </g>
          );
        })}

        {/* formula */}
        <text
          x={300}
          y={195}
          textAnchor="middle"
          fill="#1d1913"
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize={17}
        >
          value = (-1)^s × 1.mantissa × 2^(exp - 1023)
        </text>

        {/* decorative 0.1 note */}
        <path
          d="M 220 35 Q 270 20 330 28"
          fill="none"
          stroke="#8f2d20"
          strokeWidth={1.2}
          opacity={0.5}
        />
        <text
          x={220}
          y={30}
          fill="#8f2d20"
          fontFamily="var(--font-hand)"
          fontSize={17}
          fontStyle="italic"
        >
          0.1 은 여기서 반복 소수 →
        </text>
      </svg>
    </Frame>
  );
}
