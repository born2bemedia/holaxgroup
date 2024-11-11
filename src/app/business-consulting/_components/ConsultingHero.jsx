"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowIcon from "@/icons/other/ArrowIcon";
import ArrowLine from "@/icons/other/ArrowLine";
import ArrowLine2 from "@/icons/other/ArrowLine2";
import Link from "next/link";
import React from "react";

const ConsultingHero = () => {
  return (
    <section className="consulting-hero">
      <div className="consulting-hero__container _container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="consulting-hero__body"
        >
          <h1 className="consulting-hero__title">
            Transform Your Business with{" "}
          </h1>
          <div className="bottom">
            <h2>Expert Guidance</h2>
            <ArrowLine2 />
            <p>
              At Holax Group, we specialise in empowering <br />
              businesses to achieve their highest potential.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingHero;
