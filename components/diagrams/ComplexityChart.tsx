import { Frame } from "./Frame";

export function ComplexityChart() {
  const w = 560;
  const h = 340;
  const padL = 50;
  const padB = 40;
  const padT = 20;
  const padR = 120;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const xMax = 30;
  const yMax = 160;

  const toX = (n: number) => padL + (n / xMax) * plotW;
  const toY = (v: number) => padT + plotH - Math.min(v, yMax) / yMax * plotH;

  const curves = [
    {
      label: "O(1)",
      note: "해시 조회",
      color: "#3a5142",
      fn: () => 2,
    },
    {
      label: "O(log n)",
      note: "이분 탐색",
      color: "#1f3b5c",
      fn: (n: number) => (n <= 0 ? 0 : Math.log2(n) * 4),
    },
    {
      label: "O(n)",
      note: "선형 탐색",
      color: "#b3791f",
      fn: (n: number) => n * 1.2,
    },
    {
      label: "O(n log n)",
      note: "효율 정렬",
      color: "#8f2d20",
      fn: (n: number) => (n <= 0 ? 0 : n * Math.log2(n) * 0.35),
    },
    {
      label: "O(n²)",
      note: "이중 루프",
      color: "#5e1d15",
      fn: (n: number) => n * n * 0.2,
    },
  ];

  const genPath = (fn: (n: number) => number) => {
    let d = "";
    for (let n = 0; n <= xMax; n += 0.5) {
      const x = toX(n);
      const y = toY(fn(n));
      d += `${d === "" ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    return d;
  };

  return (
    <Frame caption="입력 n이 자랄 때 연산량의 성장 — 선의 기울기가 모든 것을 말한다">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* axes */}
        <line
          x1={padL}
          y1={padT}
          x2={padL}
          y2={h - padB}
          stroke="#1d1913"
          strokeWidth={1.3}
        />
        <line
          x1={padL}
          y1={h - padB}
          x2={w - padR}
          y2={h - padB}
          stroke="#1d1913"
          strokeWidth={1.3}
        />

        {/* axis labels */}
        <text
          x={padL - 30}
          y={padT + 4}
          fill="#1d1913"
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize={14}
        >
          연산
        </text>
        <text
          x={w - padR - 30}
          y={h - padB + 24}
          fill="#1d1913"
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize={14}
        >
          n →
        </text>

        {/* curves */}
        {curves.map((c, i) => (
          <g key={i}>
            <path
              d={genPath(c.fn)}
              fill="none"
              stroke={c.color}
              strokeWidth={1.8}
              strokeLinecap="round"
              opacity={0.9}
            />
          </g>
        ))}

        {/* legend */}
        {curves.map((c, i) => {
          const ly = padT + 20 + i * 42;
          return (
            <g key={`l-${i}`}>
              <line
                x1={w - padR + 10}
                y1={ly}
                x2={w - padR + 34}
                y2={ly}
                stroke={c.color}
                strokeWidth={2}
              />
              <text
                x={w - padR + 40}
                y={ly + 4}
                fill="#1d1913"
                fontFamily="var(--font-display)"
                fontStyle="italic"
                fontSize={13}
              >
                {c.label}
              </text>
              <text
                x={w - padR + 40}
                y={ly + 20}
                fill="#7a6e57"
                fontFamily="var(--font-hand)"
                fontSize={13}
              >
                {c.note}
              </text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}
