"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp, fadeInDown } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WhatSliderValues = () => {
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
            image: "/images/what/what-icon-01.svg",
            title: "Honesty and Transparency",
            text: "We uphold the highest standards of honesty and transparency in all our dealings."
        },
        {
            image: "/images/what/what-icon-02.svg",
            title: "Ethical Practices",
            text: "Commitment to ethical practices in everything we do."
        },
        {
            image: "/images/what/what-icon-03.svg",
            title: "High Standards",
            text: "We strive for excellence in everything we do, consistently delivering high-quality services."
        },
        {
            image: "/images/what/what-icon-04.svg",
            title: "Continuous Improvement",
            text: "Embracing a culture of continuous improvement to enhance our services."
        },
        {
            image: "/images/what/what-icon-05.svg",
            title: "Creativity",
            text: "We embrace creativity and constant improvement to stay ahead in the industry."
        },
        {
            image: "/images/what/what-icon-06.svg",
            title: "Forward-Thinking",
            text: "Commitment to forward-thinking and innovative solutions."
        },
        {
            image: "/images/what/what-icon-07.svg",
            title: "Teamwork",
            text: "We believe in the power of teamwork and building strong, cooperative relationships."
        },
        {
            image: "/images/what/what-icon-08.svg",
            title: "Partnership",
            text: "Fostering partnerships with clients to achieve mutual success."
        },
        {
            image: "/images/what/what-icon-09.svg",
            title: "Client-Centric Focus",
            text: "Our clients’ success is our success. We are dedicated to helping you achieve your business goals."
        },
        {
            image: "/images/what/what-icon-10.svg",
            title: "Value Creation",
            text: "Creating value for clients through our expertise and dedication."
        },
    ];

    return (
        <section className="what-values__slider">
            {isMobile ? (
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    spaceBetween={15}
                    loop={true}
                    slidesPerView={1.5}
                    className="what-values-slider">
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="what-values-slider__item">
                            <div className="what-values-slider__wrapper">
                                <img src={slide.image} alt="icon" className="what-values-slider__icon" />
                                <h3 className="what-values-slider__title">{slide.title}</h3>
                                <div className="what-values-slider__text">{slide.text}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="what-values-slider">
                    {slides.map((slide, index) => (
                        <div className="what-values-slider__item" key={index}>
                            <div className="what-values-slider__wrapper">
                                <img src={slide.image} alt="icon" className="what-values-slider__icon" />
                                <h3 className="what-values-slider__title">{slide.title}</h3>
                                <div className="what-values-slider__text">{slide.text}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}
        </section>
    );
};

export default WhatSliderValues;