import React from "react";
import "@/styles/news.scss";
import ArticlesHero from "./_components/ArticlesHero";
import ArticlesSecond from "./_components/ArticlesSecond";
import ArticlesWrap from "./_components/ArticlesWrap";

export const metadata = {
  title: "Latest Industry News | Holax Group",
  description:
    "Stay updated with the latest news and trends in the business and marketing consulting industry. Holax Group brings you the most relevant industry insights.",
  openGraph: {
    title: "Latest Industry News | Holax Group",
    description:
      "Stay updated with the latest news and trends in the business and marketing consulting industry. Holax Group brings you the most relevant industry insights.",
    //images: "https://holaxgroup.com/images/meta.png",
  },
};

const ClientResults = () => {
  return (
    <>
      <ArticlesHero />
      <ArticlesSecond />
      <ArticlesWrap />
    </>
  );
};

export default ClientResults;
