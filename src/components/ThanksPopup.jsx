"use client";

import React from "react";
import usePopupStore from "@/stores/popupStore";

function ThanksPopup() {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();

  const closePopup = () => {
    setThanksPopupDisplay(false);
  };

  return (
    <div className={`thanks-popup-wrap ${thanksPopupDisplay ? "opened" : ""}`}>
      <div className="popup-inner">
        <svg
          className="popup-close"
          onClick={() => closePopup()}
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 18.5L2 2.5M18 2.5L2 18.5"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div>
          <h2>Thank you for choosing Holax Group! </h2>
          <p>Our representative will reach you out to you shortly.</p>
        </div>
      </div>
    </div>
  );
}

export default ThanksPopup;
