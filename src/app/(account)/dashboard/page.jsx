"use client";
import "@/styles/account.scss";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/authStore";
import LogoutButton from "./_components/LogoutButton";
import Orders from "./_components/Orders";
import PersonalData from "./_components/PersonalData";
import AvailableFiles from "./_components/AvailableFiles";

const Dashboard = () => {
  const router = useRouter();
  const { currentUser, fetchCurrentUser } = useAuthStore();
  const [openIndex, setOpenIndex] = useState(1);

  useEffect(() => {
    if (!currentUser) {
      fetchCurrentUser();
      router.push("/log-in");
    }
  }, [currentUser]);

  useEffect(() => {
    setOpenIndex(1);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {currentUser ? (
        <>
          <section className="account-wrap">
            <div className="_container">

              <div className="account-wrap__body">
                <ul className="account-nav">
                  <li
                    data-id={openIndex}
                    aria-current="page"
                    onClick={() => toggleItem(1)}
                    className={`${openIndex === 1 && "active"}`}
                  >
                    <span>My Account</span>
                  </li>
                  <li
                    data-id={openIndex}
                    aria-current="page"
                    onClick={() => toggleItem(2)}
                    className={`${openIndex === 2 && "active"}`}
                  >
                    <span>Recent Orders</span>
                  </li>
                  <li
                    data-id={openIndex}
                    aria-current="page"
                    onClick={() => toggleItem(3)}
                    className={`${openIndex === 3 && "active"}`}
                  >
                    <span>Downloads</span>
                  </li>
                  <li
                    data-id={openIndex}
                    aria-current="page"
                    onClick={() => toggleItem(4)}
                    className={`${openIndex === 4 && "active"}`}
                  >
                    <span>My Addresses</span>
                  </li>
                  <LogoutButton />
                </ul>

                <div className="account-content">
                  <div className={openIndex === 1 ? "block" : "hidden"}>
                    <h2>Welcome to your personal control centre.</h2>
                    <p>
                      Here, you can manage your{" "}
                      <span onClick={() => toggleItem(4)}>account details</span>
                      , monitor{" "}
                      <span onClick={() => toggleItem(2)}>recent orders</span>,
                      and update your{" "}
                      <span onClick={() => toggleItem(4)}>billing address</span>{" "}
                      in one convenient place. You can do it here if you need to
                      change your password or update your personal information.
                      Stay organised and in control with everything you need at
                      your fingertips.
                    </p>
                  </div>
                  <div className={openIndex === 2 ? "block" : "hidden"}>
                    <Orders />
                  </div>
                  <div className={openIndex === 3 ? "block" : "hidden"}>
                    <AvailableFiles />
                  </div>
                  <div className={openIndex === 4 ? "block" : "hidden"}>
                    <PersonalData />
                  </div>
                  <div className={openIndex === 5 ? "block" : "hidden"}></div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="account-wrap">
          <div className="_container">
            <p>Loading...</p>

            <div className="account-wrap__body"></div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
