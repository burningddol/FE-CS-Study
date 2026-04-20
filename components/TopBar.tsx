import Link from "next/link";
import { BrandMark } from "./BrandMark";

interface TopBarProps {
  stageLabel: string;
  stageSlug: string;
  chapterTitle: string;
}

export function TopBar({ stageLabel, stageSlug, chapterTitle }: TopBarProps) {
  return (
    <div className="topbar">
      <Link className="topbar-brand" href="/">
        <BrandMark size={24} />
        JUNSEOK
      </Link>
      <div className="topbar-divider" />
      <nav className="breadcrumb">
        <Link href="/">홈</Link>
        <span className="breadcrumb-sep">/</span>
        <Link href={`/stage/${stageSlug}`}>{stageLabel}</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{chapterTitle}</span>
      </nav>
    </div>
  );
}
