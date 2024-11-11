"use client";
import ChevronDown from "@/icons/other/ChevronDown";
import Link from "next/link";
import React, { useState } from "react";
import useAuthStore from "@/stores/authStore";

const MobileMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { currentUser, fetchCurrentUser } = useAuthStore();

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="mobile-menu">
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className={`with-sub-menu ${activeIndex === 1 ? "active" : ""} `}>
          <Link href="#" onClick={() => toggleAccordion(1)}>
            Our Solutions <ChevronDown />
          </Link>
          {activeIndex === 1 && (
            <ul className="submenu">
              <li className="header__subitem">
                <Link href="/business-consulting">Business Consulting</Link>
              </li>
              <li className="header__subitem">
                <Link href="/marketing-consulting">Marketing Consulting</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`with-sub-menu ${activeIndex === 2 ? "active" : ""} `}>
          <Link href="#" onClick={() => toggleAccordion(2)}>
            Company <ChevronDown />
          </Link>
          {activeIndex === 2 && (
            <ul className="submenu">
              <li className="header__subitem">
                <Link href="/what-we-do">What We Do</Link>
              </li>
              <li className="header__subitem">
                <Link href="/client-results">Client Results</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`with-sub-menu ${activeIndex === 3 ? "active" : ""} `}>
          <Link href="#" onClick={() => toggleAccordion(3)}>
            Insights <ChevronDown />
          </Link>
          {activeIndex === 3 && (
            <ul className="submenu">
              <li className="header__subitem">
                <Link href="/industry-news">
                  Industry News
                </Link>
              </li>
              <li className="header__subitem">
                <Link href="/articles">
                  Articles
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/careers">Careers</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
      <ul className="mobile-account">
        {!currentUser ? (
          <>
            <li className="header__account-item">
              <Link href="/log-in" className="header__account-link">
                Login
              </Link>
            </li>
            <li className="separator">|</li>
            <li className="header__account-item">
              <Link href="/sign-up" className="header__account-link">
                Sign up
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="separator">|</li>
            <li className="header__account-item">
              <Link href="/dashboard" className="header__account-link">
                Account
              </Link>
            </li>
          </>
        )}
        <li className="separator">|</li>
        <li className="header__account-item">
          <Link href="/cart" className="header__account-link">
            <img src="/images/cart.svg" alt="cart" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
