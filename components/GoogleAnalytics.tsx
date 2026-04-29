"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

interface GoogleAnalyticsProps {
  gaId: string;
}

const GA_ID_PATTERN = /^G-[A-Z0-9]+$/i;

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  if (!GA_ID_PATTERN.test(gaId)) return null;

  const initScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}', { send_page_view: false });
  `;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: initScript }}
      />
      <Suspense fallback={null}>
        <PageViewTracker gaId={gaId} />
      </Suspense>
    </>
  );
}

interface PageViewTrackerProps {
  gaId: string;
}

function PageViewTracker({ gaId }: PageViewTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    const query = searchParams?.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
      send_to: gaId,
    });
  }, [pathname, searchParams, gaId]);

  return null;
}
