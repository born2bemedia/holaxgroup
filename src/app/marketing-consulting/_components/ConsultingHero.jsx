"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowLine3 from "@/icons/other/ArrowLine3";
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
            Ignite Your Brand with Strategic <span>Marketing Solutions</span>
          </h1>
          <div className="bottom marketing">
            <ArrowLine3 />
            <p>
              At Holax Group, we understand the power of effective marketing in
              driving business success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingHero;
