import React, { Component, Fragment } from "react";
import Link from "next/link";
import Lottie from "react-lottie";

const CaseStudy = ({
  title,
  subtitle,
  lottieOptions,
  backgroundColor,
  description,
}) => {
  return (
    <Fragment>
      <div className="custom-card">
        <div className="card-img">
          <Lottie options={lottieOptions} height={"95%"} width={"100%"} />
        </div>
        <div className="card-details--container">
          <h1 className="card-text--primary">{title}</h1>
          <h2 className="card-text--secondary">{subtitle}</h2>
          <h2 className="card-text--desc">{description}</h2>
          <button className="button">Visit Website</button>
        </div>
      </div>
      <style jsx>{`
        .custom-card {
          display: flex;
          //   border: 2px solid red;
          max-width: 100rem;
          height: 60rem;
          margin: 2.5rem auto;
          // padding: 0.5rem;
          -webkit-box-shadow: 2px 2px 10px 0px rgba(57, 50, 50, 0.95);
          -moz-box-shadow: 2px 2px 10px 0px rgba(57, 50, 50, 0.95);
          box-shadow: 2px 2px 10px 0px rgba(57, 50, 50, 0.95);
          border-radius: 0.5rem;
          letter-spacing: 0.5px;
        }
        .card-img {
          //   border: 2px solid yellow;
          width: 50%;
          height: 100%;
          background: ${backgroundColor};
        }
        .card-details--container {
          //   border: 2px solid pink;
          width: 50%;
          height: 100%;
          padding: 10rem 3rem;
        }

        .card-text--primary {
          font-size: 4rem;
          font-weight: bold;
          color: #12102f;
        }

        .card-text--secondary {
          font-size: 2rem;
          color: #2f2e2e;
          margin-top: 2rem;
        }

        .card-text--desc {
          font-size: 1.6rem;
          color: #414141;
          margin-top: 10rem;
        }

        .button {
          background-color: rgb(53 48 48 / 95%);
          border: none;
          color: white;
          padding: 10px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          width: 15rem;
          font-size: 16px;
          margin-top: 3rem;
          cursor: pointer;
          border-radius: 30px;
          -webkit-box-shadow: 2px 2px 10px 0px rgba(57, 50, 50, 0.95);
          -moz-box-shadow: 2px 2px 10px 0px rgba(57, 50, 50, 0.95);
          box-shadow: 2px 2px 10px 0px rgba(57, 50, 50, 0.95);
          letter-spacing: 0.5px;
        }
      `}</style>
    </Fragment>
  );
};

export default CaseStudy;
