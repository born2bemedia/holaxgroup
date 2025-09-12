"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";

const HomeVideo = () => {
  return (
    <section className="home-video">
      <div className="home-video__container">
        <div className="home-video__body">
          <div className="home-video__image">
            <video
              width="320"
              height="280"
              autoPlay={true}
              muted
              loop
              preload="none"
              playsInline
              poster="/images/home/poster.webp"
            >
              <source src="/videos/home1.webm" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
