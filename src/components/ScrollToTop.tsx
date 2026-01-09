"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Simple component that scrolls the window to top whenever the route changes.
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Use instant scroll so the new page starts from the top immediately.
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname]);

  return null;
}