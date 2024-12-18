"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import WhatSliderOur from "../WhatSliders/WhatSliderOur";

const WhatOur = () => {

    return (
        <section className="what-our">
            <div className="what-our__container _container">
                <div className="what-our__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="what-our__title">Our Techniques and Methodologies</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="what-our__desc">
                        Our expertise is built on a foundation of proven techniques and advanced methodologies. We leverage the latest industry best practices and innovative approaches to deliver exceptional results. Some of our fundamental techniques include:
                    </motion.div>
                    <WhatSliderOur />
                </div>
            </div>
        </section>
    );
};

export default WhatOur;