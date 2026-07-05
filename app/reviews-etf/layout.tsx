import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/navbar";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Footer } from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Area ETF",
  description: "Area etf politecnico di Torino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <p style={{textAlign: "center"}}>WARNING: this website is not the official one of Politecnico di Torino and is not even affiliated with it, everything you can find here is mantaied by volounteers.</p>
        <Footer />
      </body>
    </html>
  );
}
