"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WhatSliderFeatudes = () => {
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
            number: "01",
            title: "Comprehensive <br/> Solutions",
            list: "<span>End-to-End Services:</span> From strategic planning to execution, we provide a complete suite of consulting services. ; <span>Holistic Approach:</span> Addressing all aspects of your business, including operations, finance, marketing, and human resources.",
        },
        {
            number: "02",
            title: "Industry <br/> Expertise",
            list: "<span>Diverse Experience:</span> Our consultants have extensive experience across various industries, bringing valuable insights and expertise. ; <span>Specialised Knowledge:</span> Leveraging industry-specific knowledge to provide tailored solutions.",
        },
        {
            number: "03",
            title: "Personalised <br/> Attention",
            list: "<span>Tailored Solutions:</span> We treat each client as unique, offering customised solutions that address specific challenges and goals. ; <span>Dedicated Support:</span> Providing one-on-one support ensures your needs are met and exceeded.",
        },
        {
            number: "04",
            title: "Innovative <br/> Tools",
            list: "<span>Cutting-Edge Technology:</span> Leveraging the latest tools and technologies to deliver effective and efficient solutions. ; <span>Digital Transformation:</span> Helping businesses embrace digital transformation to stay competitive in the digital age.",
        },
    ];

    return (
        <section className="what-features__slider">
            {isMobile ? (
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    spaceBetween={15}
                    loop={true}
                    className="what-features-slider">
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="what-features-slider__item">
                            <div className="what-features-slider__wrapper">
                                <div className="what-features-slider__col-01">
                                    <div className="what-features-slider__number">{slide.number}</div>
                                    <h3
                                        className="what-features-slider__title"
                                        dangerouslySetInnerHTML={{ __html: slide.title }}
                                    />
                                </div>
                                <div className="what-features-slider__col-02">
                                    <ul className="what-features-slider__list">
                                        {slide.list.split(";").map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="what-features-slider__list-item"
                                                dangerouslySetInnerHTML={{ __html: item.trim() }}
                                            />
                                        ))}
                                    </ul>
                                </div>
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
                    className="what-features-slider">
                    {slides.map((slide, index) => (
                        <div key={index} className="what-features-slider__wrapper">
                            <div className="what-features-slider__col-01">
                                <div className="what-features-slider__number">{slide.number}</div>
                                <h3
                                    className="what-features-slider__title"
                                    dangerouslySetInnerHTML={{ __html: slide.title }}
                                />
                            </div>
                            <div className="what-features-slider__col-02">
                                <ul className="what-features-slider__list">
                                    {slide.list.split(";").map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="what-features-slider__list-item"
                                            dangerouslySetInnerHTML={{ __html: item.trim() }}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}
        </section>
    );
};

export default WhatSliderFeatudes;