import React from "react";
import "@/styles/cases.scss";
import CasesHero from "./_components/CasesHero";
import CasesSecond from "./_components/CasesSecond";
import CasesWrap from "./_components/CasesWrap";
import CasesCta from "./_components/CasesCta";

export const metadata = {
  title: "Client Success Stories | Holax Group",
  description:
    "Read the success stories of clients who have achieved outstanding results with Holax Group. Discover how we can help your business succeed.",
  openGraph: {
    title: "Client Success Stories | Holax Group",
    description:
      "Read the success stories of clients who have achieved outstanding results with Holax Group. Discover how we can help your business succeed.",
    //images: "https://holaxgroup.com/images/meta.png",
  },
};

const ClientResults = () => {
  return (
    <>
      <CasesHero />
      <CasesSecond />
      <CasesWrap />
      <CasesCta />
    </>
  );
};

export default ClientResults;
