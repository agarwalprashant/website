import React, { Component } from "react";
import Link from "next/link";
import { Fragment } from "react";

const SelectedWorkCards = ({ text }) => {
  return (
    <Fragment>
      <ul className="companies-logo--section">
        <li className="flex-item">
          <img src="/rocketium.png" className="company-image" />
        </li>
        <li className="flex-item-mitron">
          <img src="/Mitron.jpg" className="company-image-mitron" />
        </li>
        <li className="flex-item">
          <img src="/verloop.png" className="company-image" />
        </li>
      </ul>
      <style jsx>{`
        .companies-logo--section {
          // border: 2px solid red;
          padding: 1rem;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          background: #f8f9fa;
          list-style: none;
        }

        .flex-item {
          padding: 5px;
          width: 100px;
          height: 100px;
          margin: 10px;

          line-height: 100px;
          color: white;
          font-weight: bold;
          font-size: 2em;
          text-align: center;
        }

        .company-image {
          min-width: 20rem;
          height: 5rem;
          //   filter: grayscale(100%);
        }

        .company-image-mitron {
          min-width: 10rem;
          height: 10rem;

          //   filter: grayscale(100%);
        }

        .flex-item-mitron {
          bottom: 5px;
          position: relative;
        }
      `}</style>
    </Fragment>
  );
};

export default SelectedWorkCards;
