import React from "react";
import "@/styles/careers.scss";
import CareersHero from "./_components/CareersHero";
import CareersSecond from "./_components/CareersSecond";
import JobPopup from "@/components/JobPopup";
import JobsWrap from "./_components/JobsWrap";
import CareersLast from "./_components/CareersLast";

export const metadata = {
  title: "Careers at Holax Group | Join Our Team",
  description:
    "Discover exciting career opportunities at Holax Group. Join our dynamic team and contribute to delivering exceptional consulting services.",
  openGraph: {
    title: "Careers at Holax Group | Join Our Team",
    description:
      "Discover exciting career opportunities at Holax Group. Join our dynamic team and contribute to delivering exceptional consulting services.",
    //images: "https://holaxgroup.com/images/meta.png",
  },
};

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
