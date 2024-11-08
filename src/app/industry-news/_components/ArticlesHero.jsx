"use client";
import ArrowIcon from "@/icons/other/ArrowIcon";
import ArrowLine2 from "@/icons/other/ArrowLine2";
import Link from "next/link";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ArticlesHero = () => {
  return (
    <section className="news-hero">
      <div className="news-hero__container _container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="news-hero__body"
        >
          <h1 className="news-hero__title">
            Stay Updated With the Latest in <br />
            <span>the Industry</span>
          </h1>
          <div className="bottom">
            <ArrowLine2 />
            <p>
              Welcome to our Industry News page, where we inform you <br />
              about the latest trends, insights, and developments in the <br />
              business and marketing consulting industry. Stay ahead of <br />
              the curve with our curated news articles and expert analyses.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesHero;
