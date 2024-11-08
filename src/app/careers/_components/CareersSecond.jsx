"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const CareersSecond = () => {
  return (
    <section className="careers-second">
      <img src="/images/careers/heroDt.png" alt="image" className="img-01" />
      <img src="/images/careers/heroMob.png" alt="image" className="img-02" />
    </section>
  );
};

export default CareersSecond;
