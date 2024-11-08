"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import "@/styles/base.scss";
import Link from "next/link";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null);

  const menuOpen = () => {
    setMenuOpened((prev) => !prev);
    setButtonActive((prev) => !prev);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const closeMenu = () => {
    setMenuOpened(false);
    setButtonActive(false);
    document.body.classList.remove("no-scroll");
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__col-01">
            <Link href="/" className="header__logo" onClick={closeMenu}>
              <img src="/images/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="header__col-02">
            <div className={`header__menu ${menuOpened ? "_active" : ""}`}>
              <nav className="header__nav _container">
                <ul className="header__list">
                  <li className="header__item-menu">
                    <Link href="/" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li
                    className={`header__item-menu _submenu ${
                      submenuOpen["solutions"] || hoveredItem === "solutions"
                        ? "_open"
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("solutions")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="wrapper">
                      <Link href="/solutions" onClick={closeMenu}>
                        Our Solutions
                      </Link>
                      {/* <button type="button" className="btn">
                        {!submenuOpen["solutions"] ? (
                          <img src="/images/menu-right.svg" alt="expand" />
                        ) : (
                          <img src="/images/menu-left.svg" alt="collapse" />
                        )}
                      </button> */}
                    </div>
                    <ul
                      className={`header__submenu ${
                        submenuOpen["solutions"] || hoveredItem === "solutions"
                          ? "_active"
                          : ""
                      }`}
                      style={{
                        maxHeight:
                          submenuOpen["solutions"] ||
                          hoveredItem === "solutions"
                            ? "1000px"
                            : "0",
                        overflow: "hidden",
                        transition: "all 0.3s ease 0s",
                        paddingTop:
                          submenuOpen["solutions"] ||
                          hoveredItem === "solutions"
                            ? "10px"
                            : "0",
                      }}
                    >
                      <li className="header__subitem">
                        <Link href="/business-consulting" onClick={closeMenu}>
                          Business Consulting
                        </Link>
                      </li>
                      <li className="header__subitem">
                        <Link href="/marketing-consulting" onClick={closeMenu}>
                          Marketing Consulting
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`header__item-menu _submenu ${
                      submenuOpen["company"] || hoveredItem === "company"
                        ? "_open"
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("company")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="wrapper">
                      <Link href="/company" onClick={closeMenu}>
                        Company
                      </Link>
                      {/* <button type="button" className="btn">
                        {!submenuOpen["company"] ? (
                          <img src="/images/menu-right.svg" alt="expand" />
                        ) : (
                          <img src="/images/menu-left.svg" alt="collapse" />
                        )}
                      </button> */}
                    </div>
                    <ul
                      className={`header__submenu ${
                        submenuOpen["company"] || hoveredItem === "company"
                          ? "_active"
                          : ""
                      }`}
                      style={{
                        maxHeight:
                          submenuOpen["company"] || hoveredItem === "company"
                            ? "1000px"
                            : "0",
                        overflow: "hidden",
                        transition: "all 0.3s ease 0s",
                      }}
                    >
                      <li className="header__subitem">
                        <Link href="/what-we-do" onClick={closeMenu}>
                          What We Do
                        </Link>
                      </li>
                      <li className="header__subitem">
                        <Link href="/client-results" onClick={closeMenu}>
                          Client Results
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`header__item-menu _submenu ${
                      submenuOpen["insights"] || hoveredItem === "insights"
                        ? "_open"
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter("insights")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="wrapper">
                      <Link href="/insights" onClick={closeMenu}>
                        Insights
                      </Link>
                      <button type="button" className="btn">
                        {/*  {!submenuOpen["insights"] ? (
                          <img src="/images/menu-right.svg" alt="expand" />
                        ) : (
                          <img src="/images/menu-left.svg" alt="collapse" />
                        )} */}
                      </button>
                    </div>
                    <ul
                      className={`header__submenu ${
                        submenuOpen["insights"] || hoveredItem === "insights"
                          ? "_active"
                          : ""
                      }`}
                      style={{
                        maxHeight:
                          submenuOpen["insights"] || hoveredItem === "insights"
                            ? "1000px"
                            : "0",
                        overflow: "hidden",
                        transition: "all 0.3s ease 0s",
                      }}
                    >
                      <li className="header__subitem">
                        <Link href="/industry-news" onClick={closeMenu}>
                          Industry News
                        </Link>
                      </li>
                      <li className="header__subitem">
                        <Link href="/articles" onClick={closeMenu}>
                          Articles
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="header__item-menu">
                    <Link href="/careers" onClick={closeMenu}>
                      Careers
                    </Link>
                  </li>
                  <li className="header__item-menu">
                    <Link href="/contacts" onClick={closeMenu}>
                      Contacts
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header__col-03">
            <nav className="header__nav">
              <ul className="header__account">
                <li className="header__account-item">
                  <Link href="/cart" className="header__account-link">
                    <img src="/images/cart.svg" alt="cart" />
                  </Link>
                </li>
                <li className="separator">|</li>
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
              </ul>
            </nav>
          </div>
          <div className="header__col-04">
            <Link href="/cart" className="cart-link">
              <img src="/images/cart.svg" alt="cart" />
            </Link>
            <button
              onClick={menuOpen}
              className={`header__menu-btn ${menuOpened ? "_active" : ""}`}
            >
              {!menuOpened ? (
                <img src="/images/menu-close.svg" alt="menu-burger" />
              ) : (
                <img alt="logo" src="/images/menu-open.svg" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
