import React, { Component, Fragment } from "react";

const MemberCard = ({ photoSrc, name, description }) => {
  console.log(photoSrc);
  return (
    <Fragment>
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src={photoSrc}
          alt="Card image cap"
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className="card-subtitle">Co-Founder</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>

      <style jsx>{`
        .card {
          //   height: 50rem;
          max-width: 30rem;
          margin: 1rem;
          border-radius: 5px;
          -webkit-box-shadow: 2px 2px 10px 0px rgba(57, 50, 50, 0.95);
          -moz-box-shadow: 2px 2px 10px 0px rgba(57, 50, 50, 0.95);
          box-shadow: 2px 2px 10px 0px rgba(57, 50, 50, 0.95);
        }

        .card-img-top {
          height: 60%;
          -webkit-filter: grayscale(60%); /* Safari 6.0 - 9.0 */
          filter: grayscale(60%);
          background: #e0dcdc;
          border-radius: 5px;
        }

        .card-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
        }

        .card-subtitle {
          text-align: center;
          font-size: 1.5rem;
        }

        .card-text {
          font-size: 1.5rem;
          font-weight: normal;
          text-align: center;
          padding: 0.5rem;
          margin: 0.5rem;
        }
      `}</style>
    </Fragment>
  );
};

export default MemberCard;
