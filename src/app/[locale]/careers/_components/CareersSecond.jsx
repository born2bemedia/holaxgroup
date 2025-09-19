"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const CareersSecond = () => {
  return (
    <section className="careers-second">
      <div className="video">
        <video
          width="2000"
          height="395"
          autoPlay={true}
          muted
          loop
          preload="none"
          playsInline
          poster="/images/careers/heroDt.png"
        >
          <source src="/videos/careers.webm" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default CareersSecond;
