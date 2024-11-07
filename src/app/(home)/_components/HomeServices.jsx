"use client";
import React, { useState, useEffect } from "react";
import HomeTab1 from "../HomeTabs/HomeTab1";
import HomeTab2 from "../HomeTabs/HomeTab2";

const HomeServices = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const tabChange = (value) => {
        setActiveTab(value);
    };

    return (
        <section className="home-services">
            <div className="home-services__container _container">
                <div className="home-services__body">
                    <h2 className="home-services__title">Discover Our Services</h2>
                    <div className="home-services__tabs">
                        <div className="tabs-home">
                            {!isMobile && (
                                <div className="tabs-home__nav">
                                    <button
                                        onClick={() => tabChange("tab1")}
                                        className={`tabs-home__button ${activeTab === "tab1" ? "active" : ""}`}
                                    >
                                        Business Consulting
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab2")}
                                        className={`tabs-home__button ${activeTab === "tab2" ? "active" : ""}`}
                                    >
                                        Marketing Consulting
                                    </button>
                                </div>
                            )}

                            <div className="tabs-home__content">
                                {isMobile ? (
                                    <>
                                        <HomeTab1 />
                                        <HomeTab2 />
                                    </>
                                ) : (
                                    <>
                                        {activeTab === "tab1" && <HomeTab1 />}
                                        {activeTab === "tab2" && <HomeTab2 />}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;