import React from "react";
import "@/styles/articles.scss";
import ArticlesWrap from "./_components/ArticlesWrap";
import ArticlesHero from "./_components/ArticlesHero";
import ArticlesSecond from "./_components/ArticlesSecond";

export const metadata = {
  title: "Expert Articles on Business and Marketing Consulting | Holax Group",
  description:
    "Explore our collection of in-depth articles on business and marketing consulting. Gain insights and practical advice from the experts at Holax Group.",
  openGraph: {
    title: "Expert Articles on Business and Marketing Consulting | Holax Group",
    description:
      "Explore our collection of in-depth articles on business and marketing consulting. Gain insights and practical advice from the experts at Holax Group.",
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
