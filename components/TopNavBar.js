import React, { Component, Fragment } from "react";
import Link from "next/link";

const TopNavBar = ({ activeTab }) => {
  const handleSubmit = () => {};
  return (
    <Fragment>
      <div className="logo-nav-container">
        <div className="header__logo-box">
          <img src="/logo-white.png" alt="Logo" className="header__logo" />
        </div>

        <div className="topnav">
          <Link href="/">
            <a className={activeTab === "home" && `active`}>Home</a>
          </Link>
          <Link href="/about">
            <a className={activeTab === "about" && `active`}>About</a>
          </Link>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </div>
      </div>

      <style jsx>{`
        .logo-nav-container {
          display: flex;
          min-width: 95%;
          justify-content: space-between;
          position: absolute;
          top: 4rem;
          left: 4rem;
          // border: 2px solid red;
        }
        .header__logo-box {
        }
        .header__logo {
          height: 4.5rem;
        }

        /* Add a black background color to the top navigation */
        .topnav {
          // background-color: #333;
          overflow: hidden;
        }

        /* Style the links inside the navigation bar */
        .topnav a {
          float: left;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }

        /* Change the color of links on hover */
        .topnav a:hover {
          background-color: #ddd;
          color: black;
        }

        /* Add a color to the active/current link */
        .topnav a.active {
          background-color: rgba(248, 249, 250, 0.5);
          color: white;
        }
      `}</style>
    </Fragment>
  );
};

export default TopNavBar;
