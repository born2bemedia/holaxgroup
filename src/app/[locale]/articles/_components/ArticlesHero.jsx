"use client";
import ArrowIcon from "@/icons/other/ArrowIcon";
import ArrowLine2 from "@/icons/other/ArrowLine2";
import Link from "next/link";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ArticlesHero = () => {
  return (
    <section className="articles-hero">
      <div className="articles-hero__container _container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="articles-hero__body"
        >
          <h1 className="articles-hero__title">
            <span>Insights and Expertise</span> in Business and Marketing
            Consulting
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesHero;
