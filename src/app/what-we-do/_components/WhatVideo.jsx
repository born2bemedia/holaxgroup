"use client";
import React, { useState, useEffect } from "react";

const WhatVideo = () => {

    return (
        <section className="what-video">
            <div className="what-video__container">
                <div className="what-video__body">
                    <div className="what-video__image">
                        <img src="/images/what/what-img-01.jpg" alt="image" className="img-01" />
                        <img src="/images/what/what-img-02.jpg" alt="image" className="img-02" />
                    </div>
                </div>
            </div>
        </section>  
    );
};

export default WhatVideo;