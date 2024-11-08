"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const WhatWhy = () => {

    return (
        <section className="what-why">
            <div className="what-why__container _container">
                <div className="what-why__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="what-why__title">
                        Why Choose Holax Group?
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="what-why__desc">
                        Clients choose us because of our commitment to excellence and track record of delivering measurable results. Here’s why you should partner with us:
                    </motion.div>
                    <div className="what-why__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="what-why__item">
                            <div className="what-why__number">01</div>
                            <h3 className="what-why__label">Proven Success</h3>
                            <ul className="what-why__list">
                                <li className="what-why__list-item"><span>Track Record:</span> We have a history of helping customers achieve their goals and drive growth.</li>
                                <li className="what-why__list-item"><span>Case Studies:</span> Showcasing success stories and testimonials from satisfied clients.</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="what-why__item"></motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="what-why__item">
                            <div className="what-why__number">02</div>
                            <h3 className="what-why__label">Expert Team</h3>
                            <ul className="what-why__list">
                                <li className="what-why__list-item"><span>Seasoned Professionals:</span> Our team comprises professionals with deep industry knowledge and expertise.</li>
                                <li className="what-why__list-item"><span>Continuous Learning:</span> Commitment to continuous learning and professional development to stay ahead of industry trends.</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="what-why__item">
                            <div className="what-why__number">03</div>
                            <h3 className="what-why__label">Client-Centric Approach</h3>
                            <ul className="what-why__list">
                                <li className="what-why__list-item"><span>Collaborative Partnership:</span> We prioritise your needs and work collaboratively to achieve your objectives.</li>
                                <li className="what-why__list-item"><span>Responsive Service:</span> Providing timely and responsive service to address your concerns and needs.</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="what-why__item">
                            <div className="what-why__number">04</div>
                            <h3 className="what-why__label">Innovative Solutions</h3>
                            <ul className="what-why__list">
                                <li className="what-why__list-item"><span>Forward-Thinking:</span> We stay ahead of industry trends, offering innovative solutions that give you a competitive edge.</li>
                                <li className="what-why__list-item"><span>Creative Problem-Solving:</span> Employing creative problem-solving techniques to address complex challenges.</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="what-why__item">
                            <div className="what-why__number">05</div>
                            <h3 className="what-why__label">Sustainable Results</h3>
                            <ul className="what-why__list">
                                <li className="what-why__list-item"><span>Long-Term Value:</span> We focus on delivering solutions that provide long-term value and sustainable success.</li>
                                <li className="what-why__list-item"><span>Performance Metrics:</span> Using performance metrics to measure success and ensure continuous improvement.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWhy;