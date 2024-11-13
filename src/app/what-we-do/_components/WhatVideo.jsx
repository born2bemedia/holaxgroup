"use client";
import React, { useState, useEffect } from "react";

const WhatVideo = () => {
  return (
    <section className="what-video">
      <div className="what-video__container">
        <div className="what-video__body">
          <div className="video">
            <video
              width="2000"
              height="440"
              autoPlay={true}
              muted
              loop
              preload="none"
            >
              <source src="/videos/what.webm" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatVideo;
