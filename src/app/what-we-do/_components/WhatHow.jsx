"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import WhatSlidesHow from "../WhatSliders/WhatSlidesHow";

const WhatHow = () => {

    return (
        <section className="what-how">
            <div className="what-how__container _container">
                <div className="what-how__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="what-how__title">How We Stand Out from Competitors</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="what-how__desc">
                        Holax Group distinguishes itself from competitors through our unique value propositions:
                    </motion.div>
                    <WhatSlidesHow />
                </div>
            </div>
        </section>
    );
};

export default WhatHow;