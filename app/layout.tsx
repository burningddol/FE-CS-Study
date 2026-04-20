import type { Metadata } from "next";
import { ProgressProvider } from "@/components/ProgressProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUNSEOK CS study — 프론트엔드 개발자를 위한 컴퓨터 과학",
  description:
    "비전공 프론트엔드 개발자를 위한 10주 CS 집중 커리큘럼. 수학·자료구조·알고리즘부터 소프트웨어 공학까지.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
