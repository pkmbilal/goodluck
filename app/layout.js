import { Outfit } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/home/SiteHeader";
import { businessJsonLd, JsonLd, seoKeywords, siteConfig, siteUrl } from "./seo";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GoodLuck Scrap | Scrap Metal Buying and Recycling",
    template: "%s | GoodLuck Scrap",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: seoKeywords,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GoodLuck Scrap | Scrap Metal Buying and Recycling",
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "GoodLuck Scrap industrial scrap yard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoodLuck Scrap | Scrap Metal Buying and Recycling",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body>
        <JsonLd data={businessJsonLd()} />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}