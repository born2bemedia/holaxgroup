"use client";
import React, { useEffect, useState } from "react";
import usePopupStore from "@/stores/popupStore";
import OrderIcon from "@/icons/OrderIcon";
import "react-toastify/dist/ReactToastify.css";

const OrderButton = ({ service, type }) => {
  const { setOrderPopupDisplay, setServiceType, setServiceValue } = usePopupStore();

  const handlePopup = () => {
    setServiceValue(service);
    setServiceType(type);
    setOrderPopupDisplay(true);
  };

  return (
    <>
      <button className="add-to-cart" onClick={handlePopup}>
        Order
        <OrderIcon />
      </button>
    </>
  );
};

export default OrderButton;
