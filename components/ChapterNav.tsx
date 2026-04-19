import Link from "next/link";
import type { Stage } from "@/lib/curriculum";

interface ChapterNavProps {
  stage: Stage;
  currentId: string;
}

export function ChapterNav({ stage, currentId }: ChapterNavProps) {
  return (
    <nav aria-label="장 목록">
      <div className="mb-5">
        <div className="font-display uppercase tracking-[0.24em] text-[10px] text-ink-mute mb-1">
          stage {stage.num}
        </div>
        <Link
          href={`/stage/${stage.slug}`}
          className="font-display text-ink text-lg leading-snug no-underline hover:text-burgundy"
        >
          {stage.title}
        </Link>
      </div>

      <ol className="border-t border-rule/70 divide-y divide-rule/50">
        {stage.chapters.map((chapter) => {
          const isCurrent = chapter.id === currentId;
          return (
            <li key={chapter.id}>
              <Link
                href={`/stage/${stage.slug}/${chapter.id}`}
                aria-current={isCurrent ? "page" : undefined}
                className={`group block py-3 no-underline transition-colors ${
                  isCurrent
                    ? "text-ink"
                    : "text-ink-soft hover:text-burgundy"
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-display italic text-[13px] ${
                      isCurrent ? "text-burgundy" : "text-ink-mute"
                    }`}
                  >
                    {chapter.num}
                  </span>
                  <span
                    className={`text-[13.5px] leading-[1.35] ${
                      isCurrent
                        ? "font-display font-semibold"
                        : "font-body"
                    }`}
                  >
                    {chapter.title}
                  </span>
                </div>
                {isCurrent && (
                  <div className="mt-1 ml-[1.9em] h-px bg-burgundy w-10" />
                )}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
