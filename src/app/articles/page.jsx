import React from "react";
import "@/styles/articles.scss";
import ArticlesWrap from "./_components/ArticlesWrap";
import ArticlesHero from "./_components/ArticlesHero";
import ArticlesSecond from "./_components/ArticlesSecond";

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
