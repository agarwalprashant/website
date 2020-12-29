import React, { Component, Fragment } from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const ClickMeBtn = ({ text }) => {
  return (
    <Fragment>
      <Link href="/ContactUs">
        <a className="cta">
          <span>{text}</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
        }
        .cta {
          position: relative;
          margin: auto;
          padding: 24px 22px;
          transition: all 0.2s ease;
          top: 5rem;
        }
        .cta:before {
          content: "";
          position: absolute;
          top: 1.2rem;
          left: 0;
          display: block;
          border-radius: 28px;
          background: rgba(255, 171, 157, 0.5);
          width: 56px;
          height: 56px;
          transition: all 0.3s ease;
        }
        .cta span {
          position: relative;
          font-size: 16px;
          line-height: 18px;
          //   font-weight: 900;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          vertical-align: middle;
        }
        .cta svg {
          position: relative;
          top: 0;
          margin-left: 10px;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke: #111;
          stroke-width: 2;
          transform: translateX(-5px);
          transition: all 0.3s ease;
        }
        .cta:hover:before {
          width: 100%;
          //   background: #ffab9d;
          background: #5d5aff;
        }
        .cta:hover svg {
          transform: translateX(0);
        }
        .cta:active {
          transform: scale(0.96);
        }
      `}</style>
    </Fragment>
  );
};

export default ClickMeBtn;
