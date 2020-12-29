import styles from "./dummy.module.css";
import classNames from "classnames";
// import { Nav } from "react-bootstrap";
import { Fragment } from "react";

import Lottie from "react-lottie";
import headerbackground from "./lotties/bubble.json";
import animationData1 from "./lotties/team-collaboration.json";
import animationData2 from "./lotties/contact-us.json";
import TypeWriterComponent from "./TypeWriter";
import CaseStudy from "./CaseStudy";
import ClickMeBtn from "./ClickMeBtn";
import WorkedAtCompanies from "./WorkedAtCompanies";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
import SayHello from "./SayHello";
import getLottieOptions from "../helpers/getLottieOptions";

import teamwork from "./lotties/team-work.json";
import customerService from "./lotties/customer-service-support.json";
import short from "./lotties/34148-swipe-for-more-rizzle-app.json";
import videoAnimation from "./lotties/40118-video-animation.json";
import Link from "next/link";

import Typewriter from "typewriter-effect";

const NavigationBar = ({}) => {
  return (
    <Fragment>
      <header className="header">
        <Lottie
          options={getLottieOptions({ lottieData: headerbackground })}
          height={"100%"}
          width={"100%"}
        />
        <TopNavBar activeTab="home" />

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              Culture of getting things done.{" "}
            </span>
            <span className="heading-primary--secondary">
              <span style={{ marginRight: "1rem" }}>We Love</span>
              <Typewriter
                options={{
                  strings: [
                    "React",
                    "NodeJs",
                    "Angular",
                    "NextJs",
                    "Open Source.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            {/* <span className="heading-primary--main">and Angular</span> */}
            {/* <div className="typewriter">
              <h1>We Love React,NodeJs and Open Source</h1>
            </div> */}

            {/* <TypeWriterComponent /> */}
            {/* <Lottie options={defaultOptions2} height={"50%"} width={"50%"} /> */}
            <ClickMeBtn text="Get In Touch" />
          </h1>
          <Lottie
            options={getLottieOptions({ lottieData: animationData1 })}
            height={"100%"}
            width={"70%"}
          />
        </div>
        {/* <Nav
          className={classNames("justify-content-end")}
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="work" className={styles.some}>
              WORK
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="about-us" className={"about"}>
              ABOUT US
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="services">SERVICES</Nav.Link>
          </Nav.Item>
        </Nav> */}
      </header>

      <WorkedAtCompanies />
      <main className="casestudy-container">
        <h1 className="selected-work-text">Selected work and case studies </h1>
        <CaseStudy
          lottieOptions={getLottieOptions({ lottieData: teamwork })}
          title="Rocketium"
          subtitle="Videos and banners, done in two ways. Manually, for control. Automation, for scale"
          backgroundColor="#ffe5b9"
          description="Blend of UX with video production: Product walkthrough videos for a high-tech giant to reduce its Ops overload."
        />
        <CaseStudy
          lottieOptions={getLottieOptions({ lottieData: videoAnimation })}
          title="Mitron"
          subtitle="Mitron is a free Short Video App and Social Platform Made In India with Love"
          backgroundColor="#3490dc"
          description="It is designed for people to showcase their
          innovative videos online with our theme of
          light humor"
        />
        <CaseStudy
          lottieOptions={getLottieOptions({ lottieData: customerService })}
          title="Verloop"
          subtitle="Build Delightful Support
          Automate customer support at scale."
          backgroundColor="pink"
          description="Provide your customers with quick and easy automated support."
        />
      </main>
      <section className="form-container">
        <div className="say-hello--text">
          <h1 className="contact-primary--text">Say Hello!</h1>
          <h2 className="contact-secondary--text">
            START A PROJECT OR SCHEDULE A TALK
          </h2>
        </div>
        <SayHello />
      </section>
      <Footer />
      <style jsx>{`
        .header {
          //   border: 2px solid red;
          height: 98vh;
          width: 100%;
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
          position: relative;
        }

        .header__text-box {
          position: absolute;
          top: 50%;
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
          text-align: left;
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

        .Typewriter {
          display: contents;
        }

        .heading-primary--secondary {
          display: flex;
          font-size: 2rem;
          font-weight: 400;
          margin-top: 2rem;
          margin-right: 1rem;
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

        .some {
          color: #fff;
          font-size: 4rem;
          position: relative;
          top: -45rem;
          right: -41rem;
        }

        .casestudy-container {
          // border: 2px solid green;
          margin: 8rem;
          // background: red;
          padding: 1rem;
        }

        .selected-work-text {
          // margin: 0 auto;
          font-size: 4rem;
          text-align: center;
          font-weight: 100;
        }

        @media (max-width: 600px) {
          .header__text-box {
            width: 100%;
            flex-direction: column;
          }
        }

        .form-container {
          // border: 2px solid green;
          background: #6b7092;
          text-align: center;
          // margin-bottom: 15rem;
          padding-bottom: 10rem;
        }

        .contact-primary--text {
          color: #121330;
          font-size: 6.5rem;
          font-weight: 900;
          padding-top: 5rem;
          padding-bottom: 1rem;
        }
        .contact-secondary--text {
          color: white;
          font-size: 2rem;
          margin-bottom: 5rem;
        }
      `}</style>
    </Fragment>
  );
};

export default NavigationBar;
