"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ArticlesSecond = () => {
  return (
    <section className="news-second">
      <img src="/images/news/heroDt.png" alt="image" className="img-01" />
      <img src="/images/news/heroMob.png" alt="image" className="img-02" />
    </section>
  );
};

export default ArticlesSecond;
