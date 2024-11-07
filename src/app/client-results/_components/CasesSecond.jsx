"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";


const CasesSecond = () => {
  return (
    <section className="cases-second">
      <img src="/images/cases/heroDt.png" alt="image" className="img-01" />
      <img src="/images/cases/heroMob.png" alt="image" className="img-02" />
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="cases-second__body"
        >
          Our personalised consulting services have empowered private clients
          and entrepreneurs to achieve their goals, overcome challenges, and
          drive their ventures to new heights. Below, explore ten comprehensive
          case studies that showcase how our expertise in business and marketing
          consulting has made a lasting impact on our clients’ journeys.
        </motion.div>
      </div>
    </section>
  );
};

export default CasesSecond;
