import React from "react";
import "@/styles/cases.scss";
import CasesHero from "./_components/CasesHero";
import CasesSecond from "./_components/CasesSecond";
import CasesWrap from "./_components/CasesWrap";
import CasesCta from "./_components/CasesCta";

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
