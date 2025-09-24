import React from "react";
import { Inter } from "next/font/google";
import "@/styles/base.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import Preloader from "@/components/Preloader";
import { GoogleAnalytics } from "@next/third-parties/google";
import { routing } from "@/i18n/routing";
/* import { PopupsProvider } from "@/context/PopupsContext"; */

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Welcome to Holax Group| Expert Consulting Services",
  description:
    "Discover Holax Group, your trusted business and marketing consulting services partner. Let us help you achieve your business goals with tailored solutions.",
  openGraph: {
    title: "Welcome to Holax Group| Expert Consulting Services",
    description:
      "Discover Holax Group, your trusted business and marketing consulting services partner. Let us help you achieve your business goals with tailored solutions.",
    //images: "https://holaxgroup.com/images/meta.png",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <GoogleAnalytics gaId="G-XK4NN4CY2D" />
          <Preloader />
          <Header />
          <main className="site">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
