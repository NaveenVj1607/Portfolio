import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for premium feel
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen Kumar | Senior Flutter Developer",
  description: "Portfolio of Naveen Kumar, a Senior Flutter Developer and Mobile Tech Lead based in Chennai, India.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/NaveenVj1607",
    title: "Naveen Kumar | Senior Flutter Developer",
    description: "Senior Flutter Developer building scalable iOS & Android apps.",
    siteName: "Naveen Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Kumar | Senior Flutter Developer",
    description: "Senior Flutter Developer building scalable iOS & Android apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
