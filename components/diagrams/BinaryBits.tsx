import { Frame } from "./Frame";

interface BinaryBitsProps {
  value?: number;
  caption?: string;
}

export function BinaryBits({ value = 13, caption }: BinaryBitsProps) {
  const bits = value
    .toString(2)
    .padStart(8, "0")
    .split("")
    .map((b) => parseInt(b, 10));

  return (
    <Frame
      caption={
        caption ??
        `10진수 ${value} = 2진수 ${bits.join("")}  ·  각 비트의 자릿값 합`
      }
    >
      <svg
        viewBox="0 0 560 220"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="hand-rough" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="2"
              seed="4"
            />
            <feDisplacementMap in="SourceGraphic" scale="1.2" />
          </filter>
        </defs>

        {bits.map((bit, i) => {
          const x = 30 + i * 63;
          const place = 2 ** (7 - i);
          const isOn = bit === 1;
          return (
            <g key={i} filter="url(#hand-rough)">
              {/* cell */}
              <rect
                x={x}
                y={70}
                width={50}
                height={60}
                fill={isOn ? "#8f2d20" : "#f5efe0"}
                stroke="#1d1913"
                strokeWidth={1.4}
                rx={2}
              />
              {/* digit */}
              <text
                x={x + 25}
                y={110}
                textAnchor="middle"
                fill={isOn ? "#f5efe0" : "#1d1913"}
                fontFamily="var(--font-display)"
                fontSize={26}
                fontStyle="italic"
                fontWeight={500}
              >
                {bit}
              </text>
              {/* place value */}
              <text
                x={x + 25}
                y={55}
                textAnchor="middle"
                fill="#7a6e57"
                fontFamily="var(--font-hand)"
                fontSize={16}
              >
                2^{7 - i}
              </text>
              <text
                x={x + 25}
                y={155}
                textAnchor="middle"
                fill={isOn ? "#8f2d20" : "#b0a484"}
                fontFamily="var(--font-display)"
                fontStyle="italic"
                fontSize={14}
              >
                {place}
              </text>
            </g>
          );
        })}

        {/* sum equation */}
        <text
          x={280}
          y={195}
          textAnchor="middle"
          fill="#1d1913"
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize={17}
        >
          = {value}
        </text>

        {/* decorative arrow */}
        <text
          x={15}
          y={105}
          fill="#b3791f"
          fontFamily="var(--font-hand)"
          fontSize={20}
        >
          bit
        </text>
      </svg>
    </Frame>
  );
}
