"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import EmailContacts from "@/icons/other/EmailContacts";
import PhoneContacts from "@/icons/other/PhoneContacts";
import AddressContacts from "@/icons/other/AddressContacts";
import FormMain from "@/components/FormMain";
import Instagram from "@/icons/social/Instagram";
import Twitter from "@/icons/social/Twitter";
import Facebook from "@/icons/social/Facebook";

const ContactsMain = () => {
  return (
    <section className="contacts-main">
      <div className="contacts-main__container _container">
        <div className="contacts-main__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="contacts-main__col-01"
          >
            <div className="contacts-main__details">
              <h2 className="contacts-main__title">Contact Details</h2>
              <ul className="contacts-main__list">
                <li className="contacts-main__item">
                  <PhoneContacts />
                  <Link
                    href="tel:+447482749572"
                    className="contacts-main__link"
                  >
                    +447482749572
                  </Link>
                </li>
                <li className="contacts-main__item">
                  <EmailContacts />
                  <Link
                    href="mailto:info@holaxgroup.com"
                    className="contacts-main__link"
                  >
                    info@holaxgroup.com
                  </Link>
                </li>
                <li className="contacts-main__item _address">
                  <AddressContacts />
                  <div className="wrapper">
                    <div className="row">
                      <h3 className="title">Registered address:</h3>
                      <div className="text">
                        71-75 Shelton Street, Covent Garden, London, United
                        Kingdom, WC2H 9JQ
                      </div>
                    </div>
                    <div className="row">
                      <h3 className="title">Office address:</h3>
                      <div className="text">
                        62 Great Eastern Street, London, EC2A 3QR
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contacts-main__details">
              <h2 className="contacts-main__title">
                Follow Us on Social Media
              </h2>
              <ul className="contacts-main__socials">
                <li className="contacts-main__social">
                  <Link
                    href="https://x.com/Holaxgroup"
                    className="contacts-main__social-link twitter"
                  >
                    <Twitter />
                  </Link>
                </li>
                <li className="contacts-main__social">
                  <Link
                    href="https://www.facebook.com/holaxgroup"
                    className="contacts-main__social-link facebook"
                  >
                    <Facebook />
                  </Link>
                </li>
              </ul>
              <div className="text">
                We’re excited to connect with you and discuss how Holax Group
                can help you achieve your business goals. Reach out through any
                of the channels above, and let’s start a conversation.
              </div>
            </div>
          </motion.div>
          <motion.div className="contacts-main__col-02">
            <h3 className="contacts-main__label">
              Fill out the form below with your details and inquiry, and one of
              our representatives will get back to you shortly.
            </h3>
            <FormMain />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsMain;
