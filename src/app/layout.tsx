import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components
import Footer from "@/components/shared/footer";
import { Providers } from "./providers";
import { WixClientContextProvider } from "@/context/wixContext";
import HeaderWrapper from "@/components/shared/other/header-wrapper"; // ✅ NEW

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minus Gaming",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WixClientContextProvider>
          <Providers>
            <HeaderWrapper /> {/* ✅ FIXED */}
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </Providers>
        </WixClientContextProvider>
      </body>
    </html>
  );
}
