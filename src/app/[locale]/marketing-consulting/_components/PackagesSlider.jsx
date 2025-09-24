"use client";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PackageIcon1 from "@/icons/PackageIcon1";
import PackageIcon2 from "@/icons/PackageIcon2";
import PackageIcon3 from "@/icons/PackageIcon3";
import PackageIcon4 from "@/icons/PackageIcon4";
import OrderIcon from "@/icons/OrderIcon";
import AddToCartButton from "@/components/AddToCartButton";
import OrderButton from "@/components/OrderButton";

const PackagesSlider = ({ products }) => {
  return (
    <Swiper
      spaceBetween={36}
      slidesPerView={2}
      pagination={{ clickable: true }}
      breakpoints={{
        // For mobile, show only 1 slide per view
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="product">
            <div className="top">
              {index == 0 && <PackageIcon1 />}
              {index == 1 && <PackageIcon2 />}
              {index == 2 && <PackageIcon3 />}
              {index == 3 && <PackageIcon4 />}
              <h3>{product.title}</h3>
              <div>
                <ReactMarkdown>{product.description}</ReactMarkdown>
              </div>
            </div>
            <div className="bottom">
              <div className="price">
                <span>{product.for_request && "From "}</span> €{product.price}{" "}
                <span>{product.suffix && product.suffix}</span>
              </div>
              {product.for_request ? (
                <OrderButton service={product.title} type="package" />
              ) : (
                <AddToCartButton product={product} />
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PackagesSlider;
