import ArrowIcon from "@/icons/other/ArrowIcon";
import ArrowLine3 from "@/icons/other/ArrowLine3";
import Link from "next/link";
import React from "react";

const ConsultingHero = () => {
  return (
    <section className="consulting-hero">
      <div className="consulting-hero__container _container">
        <div className="consulting-hero__body">
          <h1 className="consulting-hero__title">
          Ignite Your Brand with Strategic <span>Marketing Solutions</span>
          </h1>
          <div className="bottom marketing">
            <ArrowLine3 />
            <p>
            At Holax Group, we understand the power of effective marketing in driving business success. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingHero;
