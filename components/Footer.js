import React, { Component, Fragment } from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const Footer = ({ text }) => {
  return (
    <Fragment>
      <footer id="primary-footer">
        {/* footer widget start  */}
        <div className="container footer-widget-area">
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="footer-widget-heading">
                <h4>Fox Maya Studios</h4>
              </div>
              <p>
                We are a premium Interaction Design (UI/UX) and Customer
                Experience Design company.
              </p>
              <div className="footer-social-icon">
                <div className="social-title">Follow us:</div>
                <a href="https://www.facebook.com/foxmayaban/">
                  <i className="fab fa-facebook-f circle-icon"></i>
                </a>
                <a href="https://www.instagram.com/foxmayadigital/">
                  <i className="fab fa-instagram circle-icon"></i>
                </a>
                <a href="https://twitter.com/foxmayadigital">
                  <i className="fab fa-twitter circle-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/ban-sharma/">
                  <i className="fab fa-linkedin-in circle-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="footer-widget-heading">
                <h4>Popular Posts</h4>
              </div>
              <ul className="linkediting">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Footer Templates
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Portfolio Themes
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Hero
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Bootstrap 4 Tutorial
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 p-3">
              <div className="footer-widget-heading">
                <h4>Quick Links</h4>
              </div>
              <ul className="linkediting">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Contact Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> My Portfolio
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer widget end  */}
        <hr />
        {/* footer credit  */}
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright-text text-left">
                  <p>
                    Designed by{" "}
                    <a href="https://foxmaya.com/about/">Fox Maya Studios</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-menus text-right">
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Condition</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer credit end */}
      </footer>
      <style jsx>{`
        ul {
          margin: 0px;
          padding: 0px;
        }

        ul li {
          list-style: none;
        }

        #primary-footer {
          background-color: #edf7fa;
        }

        .footer-widget-area {
          padding: 50px 0;
        }

        .footer-widget-area p {
          font-size: 15px;
        }

        .footer-widget-area li {
          margin-top: 10px;
        }

        .footer-widget-area li a {
          font-size: 15px;
          color: var(--black);
        }

        .footer-widget-area li a:hover {
          text-decoration: none;
          color: #00d07e;
        }

        .footer-widget-heading h4 {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 3rem;
        }

        .linkediting .fa {
          color: #21bf73;
        }

        .footer-social-icon .social-title {
          font-size: 15px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .circle-icon {
          background: #ccf6c8;
          color: #21bf73;
          padding: 12px;
          border-radius: 50%;
          margin-left: 5px;
          height: 40px;
          width: 40px;
          text-align: center;
        }

        //    footer credit css

        .copyright-area {
          background-color: #edf7fa;
          padding: 20px 0;
        }

        .copyright-text p {
          font-size: 15px;
        }

        .copyright-text a {
          color: #21bf73;
          font-weight: 600;
        }

        .footer-menus li {
          display: inline-flex;
          margin-left: 20px;
        }

        .footer-menus li a {
          font-size: 15px;
          color: var(--black);
        }

        //    media quries

        @media (max-width: 1199.98px) {
        }

        @media (max-width: 991.98px) {
          .footer-social-icon span {
            font-size: 14px;
          }
        }

        @media (max-width: 767.98px) {
          .copyright-text p {
            text-align: center;
          }

          .footer-menus ul {
            text-align: center;
          }

          .footer-social-icon span {
            font-size: 18px;
          }
        }

        @media (max-width: 575.98px) {
          .footer-widget-area {
            padding: 0 20px;
          }

          .copyright-text p {
            text-align: center;
            font-size: 16px;
          }

          .footer-menus ul {
            text-align: center;
          }

          .footer-menus ul li a {
            font-size: 16px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Footer;
