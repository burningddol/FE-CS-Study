import { Frame } from "./Frame";

export function ArrayMemory() {
  const values = [42, 7, 91, 15, 23, 88];
  const startAddr = 0x1000;
  const cellW = 68;
  const cellH = 54;
  const offsetX = 40;
  const offsetY = 60;

  return (
    <Frame caption="배열은 연속된 메모리 슬롯 — 그래서 a[i]가 단번에 도달한다 (O(1))">
      <svg
        viewBox="0 0 580 240"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {values.map((v, i) => {
          const x = offsetX + i * cellW;
          return (
            <g key={i}>
              <rect
                x={x}
                y={offsetY}
                width={cellW - 2}
                height={cellH}
                fill="#faf6eb"
                stroke="#1d1913"
                strokeWidth={1.4}
              />
              <text
                x={x + cellW / 2}
                y={offsetY + cellH / 2 + 6}
                textAnchor="middle"
                fill="#1d1913"
                fontFamily="var(--font-mono)"
                fontSize={18}
              >
                {v}
              </text>
              {/* index */}
              <text
                x={x + cellW / 2}
                y={offsetY - 8}
                textAnchor="middle"
                fill="#8f2d20"
                fontFamily="var(--font-display)"
                fontStyle="italic"
                fontSize={13}
              >
                [{i}]
              </text>
              {/* address */}
              <text
                x={x + cellW / 2}
                y={offsetY + cellH + 18}
                textAnchor="middle"
                fill="#7a6e57"
                fontFamily="var(--font-mono)"
                fontSize={10}
              >
                0x{(startAddr + i * 4).toString(16).toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* label — contiguous */}
        <path
          d={`M ${offsetX} ${offsetY + cellH + 32} L ${offsetX + values.length * cellW - 4} ${offsetY + cellH + 32}`}
          stroke="#b3791f"
          strokeWidth={1.2}
        />
        <path
          d={`M ${offsetX} ${offsetY + cellH + 28} L ${offsetX} ${offsetY + cellH + 36}`}
          stroke="#b3791f"
          strokeWidth={1.2}
        />
        <path
          d={`M ${offsetX + values.length * cellW - 4} ${offsetY + cellH + 28} L ${offsetX + values.length * cellW - 4} ${offsetY + cellH + 36}`}
          stroke="#b3791f"
          strokeWidth={1.2}
        />
        <text
          x={offsetX + (values.length * cellW) / 2}
          y={offsetY + cellH + 50}
          textAnchor="middle"
          fill="#b3791f"
          fontFamily="var(--font-hand)"
          fontSize={16}
          fontStyle="italic"
        >
          연속된 메모리 블록 — contiguous
        </text>

        {/* unshift warning */}
        <text
          x={40}
          y={35}
          fill="#8f2d20"
          fontFamily="var(--font-hand)"
          fontSize={17}
        >
          ✎ unshift = 전부 오른쪽으로 밀어야 함 → O(n)
        </text>
        <path
          d="M 150 42 Q 180 58 200 58"
          fill="none"
          stroke="#8f2d20"
          strokeWidth={1.2}
          markerEnd="url(#arr-arrow)"
          opacity={0.6}
        />
        <defs>
          <marker
            id="arr-arrow"
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
      </svg>
    </Frame>
  );
}
