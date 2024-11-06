"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ConsultingWhy = () => {
  return (
    <section className="consulting-why">
      <div className="_container">
        <div className="consulting-why__body">
          <h2>Why Choose Our Business Consultants?</h2>
          <p>
            Choosing the right business consultant is crucial to achieving your
            goals. Here’s why our consultants stand out:
          </p>
          <Swiper
            spaceBetween={36}
            slidesPerView={2}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={true}
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
                <h3>Expertise and Experience</h3>
                <p>
                  Our team comprises seasoned professionals with extensive
                  industry experience. We bring a wealth of knowledge and proven
                  strategies to address your unique business challenges.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>02</span>
                <h3>Tailored Solutions</h3>
                <p>
                  We don’t believe in one-size-fits-all. Our consultants work
                  closely with you to develop customised solutions that align
                  with your specific needs, objectives, and industry dynamics.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>03</span>
                <h3>Innovative Approach</h3>
                <p>
                  Innovative Approach We stay ahead by embracing the latest
                  trends and technologies. Our innovative approach ensures you
                  receive cutting-edge solutions that drive sustainable growth
                  and success.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>04</span>
                <h3>Collaborative Partnership</h3>
                <p>
                  We view our clients as partners. Our collaborative approach
                  fosters solid relationships and ensures we work together
                  towards your business goals.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>05</span>
                <h3>Measurable Results</h3>
                <p>
                  We are committed to delivering results. Our strategies are
                  designed to provide measurable outcomes, helping you track
                  progress and achieve your business objectives.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>06</span>
                <h3>Comprehensive Services</h3>
                <p>
                  From strategic planning and operational improvement to
                  financial consulting and leadership development, we offer
                  various services to support all aspects of your business.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>07</span>
                <h3>Commitment to Excellence</h3>
                <p>
                  We strive for excellence in everything we do. Our dedication
                  to high standards and continuous improvement means receiving
                  the best possible service.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <Link href="#">Learn more about our consultants</Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultingWhy;
