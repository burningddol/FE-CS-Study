import type { Metadata } from "next";
import {
  Fraunces,
  Newsreader,
  JetBrains_Mono,
  Caveat,
  Noto_Serif_KR,
  Gowun_Batang,
  Gaegu,
} from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const gowunBatang = Gowun_Batang({
  variable: "--font-gowun",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const gaegu = Gaegu({
  variable: "--font-gaegu",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FE·CS Notebook — 프론트엔드 개발자를 위한 컴퓨터 과학",
  description:
    "비전공 프론트엔드 개발자를 위한 10주 CS 집중 커리큘럼. 수학·자료구조·알고리즘부터 아키텍처·배포까지.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${fraunces.variable} ${newsreader.variable} ${jetbrains.variable} ${caveat.variable} ${notoSerifKr.variable} ${gowunBatang.variable} ${gaegu.variable}`}
    >
      <body className="min-h-screen">
        <div className="relative z-[2]">{children}</div>
      </body>
    </html>
  );
}
