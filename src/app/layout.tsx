import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://el-wafa.netlify.app"),
  title: "WAFA BATIMENT — Société El Wafa de Bâtiment | Bizerte",
  description:
    "Entreprise familiale tunisienne spécialisée dans la construction et la promotion immobilière résidentielle à Bizerte. Depuis 2016 — qualité, sérieux et fidélité.",
  keywords: [
    "construction Bizerte",
    "promotion immobilière Tunisie",
    "WAFA BATIMENT",
    "El Wafa",
    "bâtiment Bizerte",
  ],
  openGraph: {
    title: "WAFA BATIMENT — Société El Wafa de Bâtiment",
    description:
      "Construction et promotion immobilière résidentielle à Bizerte, Tunisie.",
    locale: "fr_TN",
    type: "website",
    url: "https://el-wafa.netlify.app",
    images: [{ url: "/logo-wafa.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
