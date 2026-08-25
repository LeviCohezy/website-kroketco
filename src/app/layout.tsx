import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const kuahAyam = localFont({
  src: "./fonts/KuahAyam.otf",
  variable: "--font-kuah",
});

// Cutepunch — rounded display face used for headings and product names.
const cutepunch = localFont({
  src: "./fonts/Cutepunch.ttf",
  variable: "--font-display",
});

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  weight: ["700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kroketco — Verse Belgische kroketten & purée",
  description:
    "Goudbruin vanbuiten, romig vanbinnen. Ontdek de ambachtelijke kroketten en verse purée van Kroketco — vegetarisch, vegan en halal opties.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      suppressHydrationWarning
      className={`${poppins.variable} ${cutepunch.variable} ${playfair.variable} ${kuahAyam.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
