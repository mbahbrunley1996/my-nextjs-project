// src/components/ThemeProviderWrapper.tsx
"use client";

import { ThemeProvider } from "@/components/theme-provider";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
