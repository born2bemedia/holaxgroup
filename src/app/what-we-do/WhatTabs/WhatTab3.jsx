"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WhatTab3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        /* Это состояние при загрузке!!! */
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleAccordion = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className="tabs-approach__tab tab3">
            <div className="tabs-approach__wrapper">
                <button
                    className={`tabs-approach__btn ${isOpen && isMobile ? "_open" : ""}`}
                    onClick={toggleAccordion}
                >
                    <span className="title">
                        Collaborative Execution
                    </span>
                </button>
                <motion.div
                    className="tabs-approach__content"
                    initial={{ height: isMobile ? 0 : "auto", opacity: isMobile ? 0 : 1 }}
                    animate={{
                        height: isMobile ? (isOpen ? "auto" : 0) : "auto",
                        opacity: isMobile ? (isOpen ? 1 : 0) : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ overflow: "hidden" }}
                >
                    <div className="wrapper">
                        <div className="col-01">
                            <ul className="list">
                                <li className="item">
                                    <span>Implementation Support:</span> We work alongside your team to ensure the smooth execution of the strategies, providing hands-on support and expertise.
                                </li>
                                <li className="item">
                                   <span>Ongoing Collaboration:</span> Regular check-ins and progress updates ensure the implementation stays on track and adapts to emerging challenges.
                                </li>
                            </ul>
                        </div>
                        <div className="col-02">
                            <img src="/images/what/what-tab-03.jpg" alt="image" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WhatTab3;