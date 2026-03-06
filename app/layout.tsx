import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barwaaqoagri.com"),
  title: "Barwaaqo Agri Group | Agricultural Development in Somalia & East Africa",
  description: "Barwaaqo Agri Group supports farmers across Somalia with high-quality seeds, irrigation development, agricultural inputs, and farm advisory services.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Barwaaqo Agri Group | Modern Agriculture in East Africa",
    description: "Leading agricultural development company providing structured farming solutions, international partnerships, and sustainable agriculture across Somalia and East Africa.",
    url: "https://barwaaqoagri.com",
    siteName: "Barwaaqo Agri Group",
    images: [
      {
        url: "/images/hero_agriculture.png",
        width: 2560,
        height: 1440,
        alt: "Cinematic landscape of sophisticated irrigation and modern agricultural fields at sunrise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barwaaqo Agri Group | Modern Agriculture in East Africa",
    description: "Leading agricultural development company providing structured farming solutions and sustainable agriculture across Somalia and East Africa.",
    images: ["/images/hero_agriculture.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Barwaaqo Agri Group",
              "url": "https://barwaaqoagri.com",
              "logo": "https://barwaaqoagri.com/images/barwaaqo-logo.jpg",
              "description": "Leading agricultural development company in Somalia and East Africa, providing modern farming solutions, seeds, irrigation, and farm advisory services.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SO"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+252-XXX-XXXX",
                "contactType": "customer service",
                "email": "contact@barwaaqoagri.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/barwaaqo-agri-group"
              ]
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-custom-light-bg text-custom-charcoal font-sans`}>
        {children}
      </body>
    </html>
  );
}
