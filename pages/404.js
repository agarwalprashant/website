// custom pages/404.js

import Link from "next/link";
import React, { useEffect, useState, Fragment } from "react";

export default function Custom404() {
  return (
    <Fragment>
      <div className="error-container">
        <div>
          <h1 className="error-msg">Sorry, this page isn't available.</h1>
          <Link href={"/"}>
            <a className="button">Go Back to Our-website</a>
          </Link>
        </div>
        <style jsx>{`
          .error-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            // border: 2px solid red;
          }
          .error-msg {
            font-size: 2rem;
            margin-bottom: 3rem;
          }
          .button {
            background-color: #ff4f00;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
          }
        `}</style>
      </div>
    </Fragment>
  );
}
