import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Good Luck Scrap | Scrap Metal Buying and Recycling",
  description:
    "Good Luck Scrap provides scrap metal buying, collection, recycling, and industrial surplus support for businesses in Saudi Arabia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
