"use client";
import React, { useState, useEffect } from "react";
import WhatTab1 from "../WhatTabs/WhatTab1";
import WhatTab2 from "../WhatTabs/WhatTab2";
import WhatTab3 from "../WhatTabs/WhatTab3";
import WhatTab4 from "../WhatTabs/WhatTab4";


const WhatApproach = () => {
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
        <section className="what-approach">
            <div className="what-approach__container _container">
                <div className="what-approach__body">
                    <h2 className="what-approach__title">Our Approach</h2>
                    <div className="what-approach__text">At Holax Group, we believe in a personalised and collaborative approach to consulting. Our process begins with understanding your unique challenges and objectives. We work closely with you to tailor our services to your specific needs, ensuring that our solutions are not only practical but also aligned with your vision. Our approach involves:</div>
                    <div className="what-approach__tabs">
                        <div className="tabs-approach">

                            {!isMobile && (
                                <div className="tabs-approach__nav">
                                    <button
                                        onClick={() => tabChange("tab1")}
                                        className={`tabs-approach__button ${activeTab == "tab1" ? "active" : ""}`}
                                    >
                                        Initial Consultation
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab2")}
                                        className={`tabs-approach__button ${activeTab == "tab2" ? "active" : ""}`}
                                    >
                                        Customised Solutions
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab3")}
                                        className={`tabs-approach__button ${activeTab == "tab3" ? "active" : ""}`}
                                    >
                                        Collaborative Execution
                                    </button>
                                    <button
                                        onClick={() => tabChange("tab4")}
                                        className={`tabs-approach__button ${activeTab == "tab4" ? "active" : ""}`}
                                    >
                                        Continuous Support
                                    </button>
                                </div>
                            )}

                            <div className="tabs-approach__content">
                                {isMobile ? (
                                    <>
                                        <WhatTab1 />
                                        <WhatTab2 />
                                        <WhatTab3 />
                                        <WhatTab4 />
                                    </>
                                ) : (
                                    <>
                                        {activeTab == "tab1" && <WhatTab1 />}
                                        {activeTab == "tab2" && <WhatTab2 />}
                                        {activeTab == "tab3" && <WhatTab3 />}
                                        {activeTab == "tab4" && <WhatTab4 />}
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

export default WhatApproach;