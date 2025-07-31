import React from "react";
import "@/styles/base.scss";
import "@/styles/solutions.scss";
import useProductStore from "@/stores/productsStore";
import ProductsTabs from "./_components/ProductsTabs";
import PackagesWrap from "./_components/PackagesWrap";
import OrderPopup from "@/components/OrderPopup";
import ConsultingHero from "./_components/ConsultingHero";
import ConsultingSecond from "./_components/ConsultingSecond";
import ConsultingPricelist from "./_components/ConsultingPricelist";
import ConsultingWhy from "./_components/ConsultingWhy";
import FormBottom from "../(home)/_components/FormBottom";

export const metadata = {
  title: "Marketing Consulting Services | Holax Group",
  description:
    "Enhance your brand and drive engagement with Holax Group’ expert marketing consulting services. We offer tailored strategies to maximise your marketing ROI.",
  openGraph: {
    title: "Marketing Consulting Services | Holax Group",
    description:
      "Enhance your brand and drive engagement with Holax Group’ expert marketing consulting services. We offer tailored strategies to maximise your marketing ROI.",
    //images: "https://holaxgroup.com/images/meta.png",
  },
};

const BusinessConsulting = () => {
  return (
    <>
      <ConsultingHero />
      <ConsultingSecond />
      <ProductsTabs />
      <PackagesWrap />
      <ConsultingWhy />
      <ConsultingPricelist />
      <FormBottom />
      <OrderPopup />
    </>
  );
};

export default BusinessConsulting;
