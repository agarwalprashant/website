import React, { Component, Fragment } from "react";
import Link from "next/link";

const SayHello = ({}) => {
  const handleSubmit = () => {};
  return (
    <Fragment>
      <div id="contact-form">
        <div className="form-container">
          <form onSubmit={handleSubmit} method="POST">
            <div className="first-group">
              <input
                type="text"
                value=""
                name="first-name"
                placeholder="First Name"
                maxLength="100"
                className="form-item"
              />
              <input
                type="text"
                value=""
                name="last-name"
                placeholder="Last Name"
                maxLength="100"
                className="form-item"
              />
            </div>
            <div className="first-group">
              <input
                type="email"
                value=""
                placeholder="Email"
                required
                name="email"
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                maxLength="250"
                className="form-item"
              />
              <input
                type="tel"
                name="phone"
                value=""
                placeholder="Phone"
                maxLength="50"
                className="form-item"
              />
            </div>
            <div>
              <input
                className="company-name"
                type="text"
                value=""
                placeholder="Company Name (Optional)"
              />
            </div>
            <div>
              <textarea
                className="company-name"
                id="project"
                name="project"
                rows="5"
                cols="15"
                placeholder="Tell us about the project"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg custom-btn-styles"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        #contact-form {
          // border: 2px solid yellow;
          padding-top: 1.5rem;
          max-width: 60%;
          margin: 0 auto;
          background: white;
          // height: 73rem;
          text-align: center;
        }

        .first-group {
          // border: 2px solid green;
          margin: 2rem 4rem;
          height: 4rem;
          min-width: 90%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .form-item {
          // width: 50%;
          flex: 1;
          background-color: #eaeaea;
          border-radius: 1rem;
          padding: 1.5rem;
          margin: 1rem;
          font-size: 1.5rem;
          border: none;
        }

        .company-name {
          display: inline-block;
          min-width: 90%;
          // height: 5rem;
          background-color: #eaeaea;
          border-radius: 1rem;
          padding: 1.5rem;
          margin: 2rem 4rem;
          font-size: 1.5rem;
          border: none;
          // overflow-y: hidden;
          font-weight: 100;
        }

        .custom-btn-styles {
          background: black;
          display: inline-block;
          width: 15rem;
          padding: 1rem 2rem;
          margin: 2rem 2rem;
          border-radius: 1rem;
          font-size: 1.5rem;
        }
      `}</style>
    </Fragment>
  );
};

export default SayHello;
