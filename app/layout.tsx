import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vanilla Antara — Premium Indonesian Vanilla, Export & B2B",
  description:
    "Pelopor vanila kualitas premium (gourmet grade) pilihan terpercaya untuk bakery, industri kuliner, dan pasar ekspor global.",
  keywords: ["vanilla", "vanila premium", "vanilla export", "gourmet vanilla", "B2B vanilla Indonesia"],
  openGraph: {
    title: "Vanilla Antara",
    description: "Menghubungkan Tanah Nusantara dengan Cita Rasa Dunia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-cream text-forest antialiased">
        {children}
      </body>
    </html>
  );
}
