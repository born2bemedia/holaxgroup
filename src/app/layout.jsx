import React from "react";
import { Inter } from "next/font/google";
import "@/styles/base.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

/* import Preloader from "@/components/Preloader";
import { GoogleAnalytics } from "@next/third-parties/google";
import { PopupsProvider } from "@/context/PopupsContext"; */


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       {/*  <GoogleAnalytics gaId="" /> */}
        <Header />
        <main className="site">{children}</main>
        <Footer />
      </body>
    </html>
  );
}