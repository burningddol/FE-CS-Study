import { Frame } from "./Frame";

export function StackQueue() {
  return (
    <Frame caption="두 가지 줄 서기 — LIFO는 쌓고 꺼내고, FIFO는 들어온 순서대로">
      <svg
        viewBox="0 0 580 300"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* STACK */}
        <g>
          <text
            x={110}
            y={35}
            textAnchor="middle"
            fill="#8f2d20"
            fontFamily="var(--font-display)"
            fontStyle="italic"
            fontSize={22}
          >
            Stack
          </text>
          <text
            x={110}
            y={55}
            textAnchor="middle"
            fill="#7a6e57"
            fontFamily="var(--font-hand)"
            fontSize={16}
          >
            LIFO — last in, first out
          </text>

          {/* stack cells — top to bottom */}
          {["D", "C", "B", "A"].map((c, i) => (
            <g key={i}>
              <rect
                x={50}
                y={90 + i * 42}
                width={120}
                height={36}
                fill={i === 0 ? "#8f2d20" : "#faf6eb"}
                stroke="#1d1913"
                strokeWidth={1.4}
              />
              <text
                x={110}
                y={114 + i * 42}
                textAnchor="middle"
                fill={i === 0 ? "#faf6eb" : "#1d1913"}
                fontFamily="var(--font-mono)"
                fontSize={18}
              >
                {c}
              </text>
            </g>
          ))}

          {/* push/pop arrows */}
          <path
            d="M 190 100 Q 220 80 210 108"
            fill="none"
            stroke="#b3791f"
            strokeWidth={1.4}
            markerEnd="url(#sq-arrow-a)"
          />
          <text
            x={225}
            y={95}
            fill="#b3791f"
            fontFamily="var(--font-hand)"
            fontSize={15}
          >
            push
          </text>
          <path
            d="M 215 128 Q 245 150 195 140"
            fill="none"
            stroke="#3a5142"
            strokeWidth={1.4}
            markerEnd="url(#sq-arrow-a)"
          />
          <text
            x={225}
            y={155}
            fill="#3a5142"
            fontFamily="var(--font-hand)"
            fontSize={15}
          >
            pop
          </text>

          <text
            x={110}
            y={280}
            textAnchor="middle"
            fill="#7a6e57"
            fontFamily="var(--font-hand)"
            fontSize={15}
          >
            콜 스택 · 브라우저 히스토리
          </text>
        </g>

        {/* divider */}
        <line
          x1={300}
          y1={60}
          x2={300}
          y2={270}
          stroke="#d8cba7"
          strokeWidth={1}
          strokeDasharray="3 3"
        />

        {/* QUEUE */}
        <g transform="translate(310, 0)">
          <text
            x={130}
            y={35}
            textAnchor="middle"
            fill="#8f2d20"
            fontFamily="var(--font-display)"
            fontStyle="italic"
            fontSize={22}
          >
            Queue
          </text>
          <text
            x={130}
            y={55}
            textAnchor="middle"
            fill="#7a6e57"
            fontFamily="var(--font-hand)"
            fontSize={16}
          >
            FIFO — first in, first out
          </text>

          {["A", "B", "C", "D"].map((c, i) => (
            <g key={i}>
              <rect
                x={30 + i * 52}
                y={150}
                width={46}
                height={40}
                fill={i === 0 ? "#3a5142" : "#faf6eb"}
                stroke="#1d1913"
                strokeWidth={1.4}
              />
              <text
                x={53 + i * 52}
                y={175}
                textAnchor="middle"
                fill={i === 0 ? "#faf6eb" : "#1d1913"}
                fontFamily="var(--font-mono)"
                fontSize={18}
              >
                {c}
              </text>
            </g>
          ))}

          {/* arrows */}
          <path
            d="M 260 170 L 232 170"
            fill="none"
            stroke="#b3791f"
            strokeWidth={1.4}
            markerEnd="url(#sq-arrow-a)"
          />
          <text
            x={250}
            y={140}
            fill="#b3791f"
            fontFamily="var(--font-hand)"
            fontSize={15}
          >
            enqueue
          </text>

          <path
            d="M 22 170 L 8 170"
            fill="none"
            stroke="#3a5142"
            strokeWidth={1.4}
            markerEnd="url(#sq-arrow-a)"
          />
          <text
            x={-10}
            y={140}
            fill="#3a5142"
            fontFamily="var(--font-hand)"
            fontSize={15}
          >
            dequeue
          </text>

          <text
            x={130}
            y={280}
            textAnchor="middle"
            fill="#7a6e57"
            fontFamily="var(--font-hand)"
            fontSize={15}
          >
            이벤트 루프 태스크 큐 · BFS
          </text>
        </g>

        <defs>
          <marker
            id="sq-arrow-a"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth={5}
            markerHeight={5}
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </Frame>
  );
}
