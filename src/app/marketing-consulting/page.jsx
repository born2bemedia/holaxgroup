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

const BusinessConsulting = () => {
  return (
    <>
      <ConsultingHero />
      <ConsultingSecond />
      <ProductsTabs />
      <PackagesWrap />
      <ConsultingWhy />
      <ConsultingPricelist />
      <OrderPopup />
    </>
  );
};

export default BusinessConsulting;
