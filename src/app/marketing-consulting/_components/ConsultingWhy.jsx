"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ArrowLine4 from "@/icons/other/ArrowLine4";

const ConsultingWhy = () => {
  return (
    <section className="consulting-why">
      <div className="_container">
        <div className="consulting-why__body">
          <div className="top">
            <h2>Our Step-by-Step Approach</h2>
            <ArrowLine4 />
            <p>Your Path to Marketing Success</p>
          </div>
          <p>
            At Holax Group, we believe in a systematic and collaborative
            approach to ensure your marketing consulting experience is seamless
            and effective. Here’s how we work with you every step of the way to
            elevate your brand and achieve your marketing goals:
          </p>
          <Swiper
            spaceBetween={36}
            slidesPerView={2}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={false}
            breakpoints={{
              // For mobile, show only 1 slide per view
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="item">
                <span>01</span>
                <h3>Initial Consultation</h3>
                <p>
                  We start with a comprehensive consultation to understand your
                  business, marketing needs, and objectives. This helps us
                  tailor our services to your specific goals.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>02</span>
                <h3>Market Research & Analysis</h3>
                <p>
                  Our team conducts thorough market research to gather insights
                  into your target audience, competitors, and industry trends.
                  This forms the foundation of our strategic planning.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>03</span>
                <h3>Strategy Development</h3>
                <p>
                  Based on our research, we develop a customised marketing
                  strategy that aligns with your business goals. This includes
                  brand positioning, digital marketing plans, content
                  strategies, and more.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>04</span>
                <h3>Implementation</h3>
                <p>
                  We put the approved strategy into action, setting up your
                  digital presence, creating content, managing social media, and
                  executing campaigns. Our team ensures every aspect is
                  optimised for success.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>05</span>
                <h3>Ongoing Management</h3>
                <p>
                  Continuous management and optimization are crucial. We monitor
                  all marketing activities, making necessary adjustments to
                  improve performance and achieve desired outcomes.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>06</span>
                <h3>Performance Analytics</h3>
                <p>
                  We provide detailed analytics and reports to measure the
                  effectiveness of our marketing efforts. This includes tracking
                  key metrics, evaluating ROI, and identifying areas for
                  improvement.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>07</span>
                <h3>Continuous Improvement</h3>
                <p>
                  Marketing is an ongoing process. We work with you to refine
                  strategies, explore new opportunities, and ensure your
                  marketing efforts evolve with market changes and business
                  growth.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>08</span>
                <h3>Feedback & Collaboration</h3>
                <p>
                  Your feedback is essential. We maintain open communication to
                  ensure our services meet your expectations and adapt to your
                  evolving needs.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <Link href="/what-we-do">Start your marketing journey</Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultingWhy;
