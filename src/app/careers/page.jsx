import React from "react";
import "@/styles/careers.scss";
import CareersHero from "./_components/CareersHero";
import CareersSecond from "./_components/CareersSecond";
import JobPopup from "@/components/JobPopup";
import JobsWrap from "./_components/JobsWrap";
import CareersLast from "./_components/CareersLast";

const Careers = () => {
  return (
    <>
      <CareersHero />
      <CareersSecond />
      <JobsWrap />
      <CareersLast />
      <JobPopup />
    </>
  );
};

export default Careers;
