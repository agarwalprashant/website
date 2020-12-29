import React, { Component } from "react";
import Link from "next/link";
import { Fragment } from "react";
import TopNavBar from "../components/TopNavBar";
import MemberCards from "../components/MemberCards";

const AboutUs = ({ text }) => {
  return (
    <Fragment>
      <header className="header">
        {/* <img src="/about-us-background.jpg" className="about-us-img" /> */}
        <img src="/glass.jpg" className="about-us-img" />
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              NON-IIT Grads, shaping up the Service Design industry in India{" "}
            </span>
          </h1>
        </div>
        <div className="member-card--parent">
          <MemberCards />
        </div>
      </header>
      <TopNavBar activeTab="about" />

      <style jsx>{`
        .header {
          // border: 2px solid yellow;
          height: 95rem;
          width: 100%;
          position: relative;
        }
        .about-us-img {
          height: 100%;
          width: 100%;
        }
        .header__text-box {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          display: flex;
          //   border: 2px solid red;
          width: 90%;
          height: 50%;
          justify-content: center;
          align-items: center;
        }

        .heading-primary {
          color: #fff;
          // text-transform: uppercase;
          backface-visibility: hidden;
          min-width: 50%;
          text-align: center;
        }
        .heading-primary--main {
          display: block;
          font-size: 5rem;
          font-weight: 900;
          letter-spacing: 0.5rem;
          animation-name: moveInLeft;
          animation-duration: 1s;
          animation-timing-function: ease-out;
          /*
                animation-delay: 3s;
                animation-iteration-count: 3;
                */
        }
        @media only screen and (max-width: 37.5em) {
          .heading-primary--main {
            letter-spacing: 1rem;
            font-family: 5rem;
          }
        }

        .member-card--parent {
          position: absolute;
          top: 40%;
          left: 0;
          right: 0;
          // margin: 0 auto;
          // width: 50%;
          // border: 2px solid blue;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Fragment>
  );
};

export default AboutUs;
