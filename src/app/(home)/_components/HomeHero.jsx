"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowIcon from "@/icons/other/ArrowIcon";
import ArrowLine from "@/icons/other/ArrowLine";

const HomeHero = () => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const bgImage = isMobile
    /////? "/images/home/home-back-03.webp" /* Mobile */
    /////: "/images/home/home-img-01.webp"; /* Desktop */

    return (
        <section className="home-hero">
            <div className="home-hero__container _container">
                <div className="home-hero__body">
                    <h1 className="home-hero__title">
                        Start journey toward success
                        with <span>Holax Group</span>
                    </h1>
                    <div className="home-hero__icon"><ArrowLine /></div>
                    <div className="home-hero__text">Enrol now and see how we <br /> can transform your future.</div>
                    <Link href="#" className="home-hero__link">
                        Book a free consultation
                        <ArrowIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;