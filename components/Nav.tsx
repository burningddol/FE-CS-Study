import Link from "next/link";
import { BrandMark } from "./BrandMark";

type NavKey = "home" | "curriculum" | "progress" | "about";

interface NavProps {
  active?: NavKey;
}

interface NavItem {
  id: NavKey;
  label: string;
  href: string;
}

const links: NavItem[] = [
  { id: "home", label: "홈", href: "/" },
  { id: "curriculum", label: "커리큘럼", href: "/#curriculum" },
  { id: "progress", label: "진행률", href: "/#progress" },

];

export function Nav({ active = "home" }: NavProps) {
  return (
    <nav className="nav">
      <Link className="brand" href="/">
        <BrandMark size={28} />
        <div className="brand-text">
          <span className="brand-title">JUNSEOK</span>
          <span className="brand-sub">CS · STUDY</span>
        </div>
      </Link>
      <div className="nav-links">
        {links.map((l) => (
          <Link
            key={l.id}
            className={`nav-link ${active === l.id ? "is-active" : ""}`}
            href={l.href}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <div className="nav-right">
        <a
          className="nav-link"
          href="https://github.com/burningddol/FE-CS-Study"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}
