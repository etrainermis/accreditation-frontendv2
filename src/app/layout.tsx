import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Geist } from "next/font/google";
import localFont from "next/font/local";

import { AppProviders } from "@/components/layout/app-providers";
import { appConfig } from "@/lib/config/app";

import "@/app/globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const nunitoSans = localFont({
  src: [
    {
      path: "../styles/fonts/Nunito_Sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../styles/fonts/Nunito_Sans/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf",
      style: "italic",
    }
  ],
  variable: "--font-nunito-sans",
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(manrope.variable, ibmPlexMono.variable, nunitoSans.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
