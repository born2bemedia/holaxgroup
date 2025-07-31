"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp, fadeInDown } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WhatSliderOur = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slides = [
        {
            title: "Advanced Analytics",
            text: "Utilising sophisticated data analytics tools to gather insights on market trends, customer behaviours, and business performance."
        },
        {
            title: "Predictive Modelling",
            text: "Employing predictive modelling to forecast future trends and inform strategic decisions."
        },
        {
            title: "Flexible Project Management",
            text: "Adopting agile practices to ensure flexibility and rapid adaptation to changing market conditions."
        },
        {
            title: "Iterative Development",
            text: "Implementing solutions in iterative cycles to improve and adapt based on feedback and results continuously."
        },
        {
            title: "User-Centric Approach",
            text: "Focusing on the needs and experiences of end-users to drive innovative solutions."
        },
        {
            title: "Prototyping and Testing",
            text: "Rapid prototyping and testing of ideas to identify the most effective solutions."
        },
        {
            title: "Efficiency and Value Creation",
            text: "Focusing on eliminating waste and optimising processes to deliver maximum value."
        },
        {
            title: "Continuous Improvement",
            text: "Embracing a culture of continuous improvement to enhance efficiency and effectiveness."
        },
        {
            title: "Industry Comparisons",
            text: "Comparing your performance with industry standards to identify best practices and areas for improvement."
        },
        {
            title: "Goal Setting",
            text: "Setting ambitious yet achievable goals based on benchmark data."
        },
    ];

    return (
        <section className="what-our__slider">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    575: { slidesPerView: 1 },
                    767: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                }}
                /* slidesPerView={1.5} */
                className="what-our-slider">
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="what-our-slider__item">
                        <div className="what-our-slider__wrapper">
                            <h3 className="what-our-slider__title">{slide.title}</h3>
                            <div className="what-our-slider__text">{slide.text}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default WhatSliderOur;