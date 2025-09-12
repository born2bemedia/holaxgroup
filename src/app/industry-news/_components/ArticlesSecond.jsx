"use client";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ArticlesSecond = () => {
  return (
    <section className="news-second">
      <div className="video">
        <video
          width="2000"
          height="395"
          autoPlay={true}
          muted
          loop
          preload="none"
          playsInline
          poster="/images/news/poster.webp"
        >
          <source src="/videos/news.webm" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default ArticlesSecond;
