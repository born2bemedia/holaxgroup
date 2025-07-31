"use client";
import ChevronDown from "@/icons/other/ChevronDown";
import ChevronRight from "@/icons/other/ChevronRight";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CasesCta = () => {
  return (
    <section className="cases-cta">
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="cases-cta__body"
        >
          <h2>
            Ready to Achieve Your <br />
            Success Story?
          </h2>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
          <Link href="#">Start your journey with Holax Group</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesCta;
