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
  metadataBase: new URL("https://vanillaantara.com"),
  title: "Vanilla Antara — Premium Indonesian Vanilla, Export & B2B",
  description:
    "Pelopor vanila kualitas premium (gourmet grade) pilihan terpercaya untuk bakery, industri kuliner, dan pasar ekspor global.",
  keywords: ["vanilla", "vanila premium", "vanilla export", "gourmet vanilla", "B2B vanilla Indonesia", "vanilla planifolia", "vanilla pods Indonesia"],
  authors: [{ name: "Vanilla Antara", url: "https://vanillaantara.com" }],
  creator: "Vanilla Antara",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://vanillaantara.com" },
  openGraph: {
    title: "Vanilla Antara — Premium Indonesian Vanilla, Export & B2B",
    description: "Gourmet-grade Planifolia vanilla sourced directly from Indonesian growers, supplied to bakeries, culinary producers, and export buyers worldwide.",
    url: "https://vanillaantara.com",
    siteName: "Vanilla Antara",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/hero-vanilla.jpg",
        width: 1200,
        height: 630,
        alt: "Vanilla Antara — Premium Indonesian Vanilla Pods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanilla Antara — Premium Indonesian Vanilla, Export & B2B",
    description: "Gourmet-grade Planifolia vanilla sourced directly from Indonesian growers.",
    images: ["/images/hero-vanilla.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vanilla Antara",
              url: "https://vanillaantara.com",
              logo: "https://vanillaantara.com/images/hero-vanilla.jpg",
              description: "Premium Indonesian Vanilla supplier — Gourmet Grade A Planifolia pods for bakeries, culinary producers, and export buyers worldwide.",
              email: "hello@vanillaantara.com",
              address: { "@type": "PostalAddress", addressCountry: "ID" },
              sameAs: ["https://vanillaantara.com"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
