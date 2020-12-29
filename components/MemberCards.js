import React, { Component, Fragment } from "react";
import Link from "next/link";
import MemberCard from "./MemberCard";

const MemberCards = ({}) => {
  return (
    <Fragment>
      <div className="member-cards--container">
        <MemberCard
          name="Paresh Chouhan"
          photoSrc="/paresh-removebg.png"
          description="Rahul is an alumnus of IIT Roorkee. A true design practitioner and propagator. He is one of the rare combinations with the conversance of data visualization, design thinking, and product."
        />
        <MemberCard
          name="Prashant Agarwal"
          photoSrc="/prashant-removebg.png"
          description="An alumnus of IIT Roorkee. She pursues leadership, management, and alliance at Ungrammary. She possesses a strong background in science and technology, analytics, and process design."
        />
        <MemberCard
          name="Apoorv Mishra"
          photoSrc="/apoorv-mishra-removebg.png"
          description="An alumnus of IIT Kanpur with a Master's degree in design. She is a design practitioner with expertise in user research, user experience and interface design."
        />
      </div>

      <style jsx>{`
        .member-cards--container {
          display: flex;
          //   border: 2px solid red;
        }
      `}</style>
    </Fragment>
  );
};

export default MemberCards;
