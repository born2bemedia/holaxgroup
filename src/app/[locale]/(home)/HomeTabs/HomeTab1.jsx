"use client";
import "@/styles/home.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ArrowIcon from "@/icons/other/ArrowIcon";


const HomeTab1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Слайды
    const slides = [
        {
            number: "01.",
            title: "Strategic Planning",
            text: "Develop a clear, actionable roadmap to achieve your business goals. Our strategic planning services help you define your vision, set realistic targets, and outline the steps needed to reach them."
        },
        {
            number: "02.",
            title: "Operational Improvement",
            text: "Optimise your business processes for maximum efficiency and effectiveness. We identify bottlenecks, streamline workflows, and implement best practices to enhance your operations."
        },
        {
            number: "03.",
            title: "Financial Consulting",
            text: "Strengthen your financial health with our expert advice. From budgeting and forecasting to financial analysis and risk management, we provide the insights you need to make informed decisions."
        },
        {
            number: "04.",
            title: "Market Analysis",
            text: "Gain a competitive edge with in-depth market research and analysis. We help you understand market trends, identify opportunities, and develop strategies to capture new markets."
        },
        {
            number: "05.",
            title: "Business Process Reengineering",
            text: "Transform your business processes to achieve significant performance improvements. We help you redesign workflows, eliminate inefficiencies, and leverage technology to drive growth."
        },
        {
            number: "06.",
            title: "Change Management",
            text: "Our change management services help you navigate organisational changes smoothly and effectively. They also ensure your team is aligned and engaged."
        },
        {
            number: "07.",
            title: "Performance Management",
            text: "Enhance your team’s performance with our comprehensive management solutions. We provide tools and strategies to set goals, measure progress, and improve productivity."
        },
        {
            number: "08.",
            title: "Risk Management",
            text: "Identify, assess, and mitigate risks to protect your business. Our risk management services help you develop robust strategies to manage potential threats and ensure business continuity."
        },
        {
            number: "09.",
            title: "Leadership Development",
            text: "Cultivate strong leaders within your organisation. We offer customised leadership development programs that equip your team with the skills and confidence to lead effectively."
        },
        {
            number: "10.",
            title: "Innovation & Growth Strategy",
            text: "Foster a culture of innovation and drive sustainable growth. Our experts work with you to identify new opportunities, create innovative solutions, and implement growth strategies that keep you ahead of the competition."
        },
    ];

    return (
        <div className="tabs-home__wrapper tab1">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="tabs-home__label">
                Business Consulting
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text">
                Elevate your brand and connect with your audience through our dynamic marketing consulting services. Whether you want to enhance your digital presence, create compelling content, or drive targeted campaigns, our tailored solutions deliver measurable results and propel your brand forward.
            </motion.div>
            <div className="home-services__slider">
                {isMobile ? (
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        spaceBetween={15}
                        loop={true}
                        className="home-services-slider">
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="home-services-slider__item">
                                    <div className="home-services-slider__wrapper">
                                        <div className="home-services-slider__top">
                                            <div className="home-services-slider__number">{slide.number}</div>
                                            <h3
                                                className="home-services-slider__title"
                                                dangerouslySetInnerHTML={{ __html: slide.title }}
                                            />
                                        </div>
                                        <div className="home-services-slider__text">{slide.text}</div>
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
                        custom={0.2}
                        className="home-services-slider">
                        {slides.map((slide, index) => (
                            <div className="home-services-slider__item" key={index}>
                                <div className="home-services-slider__wrapper">
                                    <div className="home-services-slider__top">
                                        <div className="home-services-slider__number">{slide.number}</div>
                                        <h3
                                            className="home-services-slider__title"
                                            dangerouslySetInnerHTML={{ __html: slide.title }}
                                        />
                                    </div>
                                    <div className="home-services-slider__text">{slide.text}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>

            <div className="tabs-home__bottom">
                <div className="tabs-home__arrow">
                    <img src="/images/home/arrow-long-01.svg" alt="arrow" />
                </div>
                <Link href="/business-consulting" className="tabs-home__link">
                    Improve operations now
                    <ArrowIcon />
                </Link>
            </div>
        </div>
    );
};

export default HomeTab1;