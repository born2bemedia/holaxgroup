"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowIcon from "@/icons/other/ArrowIcon";

const HomeItems = () => {
  return (
    <section className="home-items">
      <div className="home-items__container _container">
        <div className="home-items__body">
          <div className="home-items__items">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="home-items__item"
            >
              <div className="home-items__wrapper">
                <h3 className="home-items__title">What We Do</h3>
                <p className="home-items__label">
                  Transforming Visions into Reality
                </p>
                <div className="home-items__text">
                  Our approach centres on understanding your unique business
                  challenges and crafting bespoke solutions that align with your
                  vision. Our comprehensive consulting services encompass
                  strategic planning, operational improvement, and innovative
                  growth strategies. By leveraging our deep expertise and
                  collaborative methodology, we drive sustainable growth and
                  ensure your business competes and thrives in a dynamic
                  marketplace.
                </div>
                <Link href="/what-we-do" className="home-items__link">
                  Explore our approach
                  <ArrowIcon />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="home-items__item"
            >
              <div className="home-items__wrapper">
                <h3 className="home-items__title">Client Results</h3>
                <p className="home-items__label">
                  Success Stories that Inspire
                </p>
                <div className="home-items__text">
                  Discover how our clients have achieved remarkable success with
                  the help of Holax Group. Read our case studies and
                  testimonials to see the tangible impact of our consulting
                  solutions and learn how we can help you reach your goals.
                </div>
                <Link href="/client-results" className="home-items__link">
                  See client success
                  <ArrowIcon />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="home-items__item"
            >
              <div className="home-items__wrapper">
                <h3 className="home-items__title">Industry News</h3>
                <p className="home-items__label">
                  Stay Ahead with the Latest Industry Trends
                </p>
                <div className="home-items__text">
                  Keep up with the ever-evolving market landscape. Our Industry
                  News section brings you the latest updates, trends, and
                  insights from across various sectors, helping you stay
                  informed and make strategic decisions.
                </div>
                <Link href="/industry-news" className="home-items__link">
                  Read industry news
                  <ArrowIcon />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="home-items__item"
            >
              <div className="home-items__wrapper">
                <h3 className="home-items__title">Articles</h3>
                <p className="home-items__label">Insights and Expertise</p>
                <div className="home-items__text">
                  Dive into our collection of articles written by industry
                  experts. From in-depth analysis to practical tips, our
                  articles provide valuable knowledge to help you navigate the
                  complexities of business and marketing.
                </div>
                <Link href="/articles" className="home-items__link">
                  Explore articles
                  <ArrowIcon />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="home-items__item"
            >
              <div className="home-items__wrapper">
                <h3 className="home-items__title">Careers</h3>
                <p className="home-items__label">Join Our Dynamic Team</p>
                <div className="home-items__text">
                  Are you ready to take your career to the next level? At Holax
                  Group, we are always looking for talented individuals who
                  share our passion for excellence and innovation. Explore our
                  current job openings and become part of a team that makes a
                  difference.
                </div>
                <Link href="/careers" className="home-items__link">
                  View open positions
                  <ArrowIcon />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="home-items__item _last"
            >
              <video
                width="625"
                height="450"
                autoPlay={true}
                muted
                loop
                preload="none"
              >
                <source src="/videos/home2.webm" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeItems;
