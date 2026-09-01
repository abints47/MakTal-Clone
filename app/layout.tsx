import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MakTal Technologies | Website Development & Digital Marketing",
  description:
    "MakTal Technologies is a registered website development and digital marketing company providing top-notch services at reasonable prices. Based in Kerala, India.",
  keywords: [
    "website development",
    "digital marketing",
    "SEO",
    "web design",
    "Kerala",
    "India",
  ],
  openGraph: {
    title: "MakTal Technologies | Website Development & Digital Marketing",
    description:
      "Custom websites and digital marketing solutions to grow your business.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-overlay bg-[#050505] text-white">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
