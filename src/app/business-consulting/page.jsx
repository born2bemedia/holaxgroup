import React from "react";
import "@/styles/base.scss";
import "@/styles/solutions.scss";
import useProductStore from "@/stores/productsStore";
import ProductsTabs from "./_components/ProductsTabs";
import PackagesWrap from "./_components/PackagesWrap";
import OrderPopup from "@/components/OrderPopup";

const BusinessConsulting = () => {
  return (
    <>
      <ProductsTabs />
      <PackagesWrap />
      <OrderPopup />
    </>
  );
};

export default BusinessConsulting;
