"use client";
import ArrowIcon from "@/icons/other/ArrowIcon";
import ArrowLine2 from "@/icons/other/ArrowLine2";
import Link from "next/link";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CasesHero = () => {
  return (
    <section className="cases-hero">
      <div className="cases-hero__container _container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="cases-hero__body"
        >
          <h1 className="cases-hero__title">Transformative Success</h1>
          <div className="bottom marketing">
            <h2>Stories</h2>
            <ArrowLine2 />
            <p>At Holax Group, we take pride in the success of our clients.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesHero;
