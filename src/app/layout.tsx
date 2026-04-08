import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import { AppProviders } from "@/components/layout/app-providers";
import { appConfig } from "@/lib/config/app";

import "@/app/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
