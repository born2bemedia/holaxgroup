import React from 'react';
import Link from "next/link";
import "@/styles/footer.scss";
import "@/styles/base.scss";
import Instagram from "@/icons/social/Instagram";
import Twitter from '@/icons/social/Twitter';
import Facebook from '@/icons/social/Facebook';
import Phone from '@/icons/other/Phone';
import Email from '@/icons/other/Email';
import Address from '@/icons/other/Address';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__row-01">
            <div className="footer__col-01">
              <Link href="#" className="footer__logo">LOGO</Link>
              <div className="footer__text">
                Optimise your operations and transform your strategy today.
              </div>
              <ul className="footer__socials">
                <li className="footer__social">
                  <Link href="#" className="footer__social-link instagram"><Instagram /></Link>
                </li>
                <li className="footer__social">
                  <Link href="#" className="footer__social-link twitter"><Twitter /></Link>
                </li>
                <li className="footer__social">
                  <Link href="#" className="footer__social-link facebook"><Facebook /></Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-02">
              <h3 className="footer__title">Expertise</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="/what-we-do" className="footer__link">What We Do</Link>
                </li>
                <li className="footer__item">
                  <Link href="/client-results" className="footer__link">Client Results</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-03">
              <h3 className="footer__title">Our Solutions</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="/business-consulting" className="footer__link">Business Consulting</Link>
                </li>
                <li className="footer__item">
                  <Link href="/marketing-consulting" className="footer__link">Marketing Consulting</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-04">
              <h3 className="footer__title">Join Community</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="/careers" className="footer__link">Careers</Link>
                </li>
                <li className="footer__item">
                  <Link href="/industry-news" className="footer__link">Industry News</Link>
                </li>
                <li className="footer__item">
                  <Link href="/articles" className="footer__link">Articles</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-05">
              <h3 className="footer__title">Get in Touch</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="#" className="footer__link">
                    <span>
                      <Phone />
                      phone
                    </span>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="mailto:info@holaxgroup.com" className="footer__link">
                    <span>
                      <Email />
                      info@holaxgroup.com
                    </span>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__link">
                    <span>
                      <Address />
                      address
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-06">
              <h3 className="footer__title">Legal</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="/terms-and-conditions" className="footer__link">Terms and Conditions</Link>
                </li>
                <li className="footer__item">
                  <Link href="/privacy-policy" className="footer__link">Privacy Policy</Link>
                </li>
                <li className="footer__item">
                  <Link href="/refund-policy" className="footer__link">Refund Policy</Link>
                </li>
                <li className="footer__item">
                  <Link href="/cookie-policy" className="footer__link">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__row-02">
            <div className="footer__copy">
              © {currentYear} Holax LTD. All Rights Reserved | <Link href="/privacy-policy" className="footer__link-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;