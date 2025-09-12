"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ArticlesSecond = () => {
  return (
    <section className="articles-second">
      <div className="video">
        <video
          width="2000"
          height="457"
          autoPlay={true}
          muted
          loop
          preload="none"
          playsInline
          poster="/images/articles/heroDt.png"
        >
          <source src="/videos/articles.webm" type="video/mp4" />
        </video>
      </div>
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="articles-second__body"
        >
          Our Articles page shares in-depth insights, expert analyses, and
          practical advice on various business and marketing consulting aspects.
          Our blog posts are designed to help you navigate the complexities of
          the consulting world, stay informed about the latest trends, and
          implement effective strategies to drive your business forward.{" "}
          <span>
            Explore our collection of articles written by industry experts and
            gain valuable knowledge to enhance your business success.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSecond;
