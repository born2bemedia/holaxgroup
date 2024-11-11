"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WhatSlidesHow = () => {
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
            title: "Customised <br/> Strategies",
            list: "<span>Tailored Approach:</span> Unlike cookie-cutter solutions, we tailor our strategies to fit your needs. ; <span>Bespoke Solutions:</span> Creating bespoke solutions that align with your unique goals and challenges."
        },
        {
            number: "02",
            title: "Holistic <br/> Approach",
            list: "<span>Comprehensive Services:</span> We address all aspects of your business, from strategy and operations to marketing and finance. ; <span>Integrated Solutions:</span> Providing integrated solutions that ensure all parts of your business work harmoniously."
        },
        {
            number: "03",
            title: "Transparent <br/> Communication",
            list: "<span>Open Dialogue:</span> We maintain open and honest communication, ensuring you are informed immediately. ; <span>Regular Updates:</span> Providing regular updates and reports to keep you apprised of progress and results."
        },
        {
            number: "04",
            title: "Result-Oriented <br/> Focus",
            list: "<span>Measurable Outcomes:</span> Our primary goal is to deliver tangible, measurable results that drive your success. ; <span>Performance Tracking:</span> Using performance tracking to measure success and make data-driven decisions."
        },
    ];

    return (
        <section className="what-how__slider">
            {isMobile ? (
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    spaceBetween={15}
                    loop={true}
                   /*  slidesPerView={1.5} */
                    className="what-how-slider">
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="what-how-slider__item">
                            <div className="what-how-slider__wrapper">
                                <div className="what-how-slider__col-01">
                                    <div className="what-how-slider__number">{slide.number}</div>
                                    <h3
                                        className="what-how-slider__title"
                                        dangerouslySetInnerHTML={{ __html: slide.title }}
                                    />
                                </div>
                                <div className="what-how-slider__col-02">
                                    <ul className="what-how-slider__list">
                                        {slide.list.split(";").map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="what-how-slider__list-item"
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
                    className="what-how-slider">
                    {slides.map((slide, index) => (
                        <div key={index} className="what-how-slider__wrapper">
                            <div className="what-how-slider__col-01">
                                <div className="what-how-slider__number">{slide.number}</div>
                                <h3
                                    className="what-how-slider__title"
                                    dangerouslySetInnerHTML={{ __html: slide.title }}
                                />
                            </div>
                            <div className="what-how-slider__col-02">
                                <ul className="what-how-slider__list">
                                    {slide.list.split(";").map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="what-how-slider__list-item"
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

export default WhatSlidesHow;