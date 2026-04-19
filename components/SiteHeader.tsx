import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-rule/70 bg-paper/85 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3 no-underline">
          <span className="font-display italic text-xl text-ink tracking-tight">
            FE·CS
          </span>
          <span className="font-display text-[11px] uppercase tracking-[0.28em] text-ink-mute">
            Notebook
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[13px] font-display uppercase tracking-[0.18em]">
          {[
            ["01", "수학·자료구조", "/stage/1"],
            ["02", "브라우저·네트워크", "/stage/2"],
            ["03", "OS·구조", "/stage/3"],
            ["04", "DB", "/stage/4"],
            ["05", "심화 FE", "/stage/5"],
            ["06", "소프트웨어 공학", "/stage/6"],
          ].map(([n, label, href]) => (
            <Link
              key={n}
              href={href}
              className="no-underline text-ink-soft hover:text-burgundy flex items-baseline gap-1.5 transition-colors"
            >
              <span className="text-burgundy font-semibold">{n}</span>
              <span className="text-[11px]">{label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline font-hand text-ink-mute text-lg">
            burningddol
          </span>
        </div>
      </div>
    </header>
  );
}
