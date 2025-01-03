"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import WhatSliderValues from "../WhatSliders/WhatSliderValues";

const WhatValues = () => {

    return (
        <section className="what-values">
            <div className="what-values__container _container">
                <div className="what-values__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="what-values__title">Our Values</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="what-values__desc">
                        Holax Group distinguishes itself from competitors through our unique value propositions:
                    </motion.div>
                    <WhatSliderValues />
                </div>
            </div>
        </section>
    );
};

export default WhatValues;