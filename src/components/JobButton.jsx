"use client";
import React, { useEffect, useState } from "react";
import usePopupStore from "@/stores/popupStore";
import OrderIcon from "@/icons/OrderIcon";
import "react-toastify/dist/ReactToastify.css";

const JobButton = ({ job }) => {
  const { setJobsPopupDisplay, setJobValue } = usePopupStore();

  const handlePopup = () => {
    setJobValue(job);
    setJobsPopupDisplay(true);
  };

  return (
    <>
      <button className="add-to-cart" onClick={handlePopup}>
        Apply for a position
      </button>
    </>
  );
};

export default JobButton;
