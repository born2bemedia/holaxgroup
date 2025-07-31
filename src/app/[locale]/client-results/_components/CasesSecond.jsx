"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";


const CasesSecond = () => {
  return (
    <section className="cases-second">
      <div className="video">
        <video
          width="2000"
          height="395"
          autoPlay={true}
          muted
          loop
          preload="none"
        >
          <source src="/videos/cases.webm" type="video/mp4" />
        </video>
      </div>
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
