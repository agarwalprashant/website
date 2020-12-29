import styles from "./dummy.module.css";
import classNames from "classnames";
import { Fragment } from "react";

const TypeWriterComponent = ({ text }) => {
  return (
    <Fragment>
      <div className="typewriter">
        <h1>We Love React,NodeJs and Open Source</h1>
      </div>
      <style jsx>{`
        /* DEMO-SPECIFIC STYLES */
        .typewriter {
          width: 95%;
          margin-top: 3rem;
        }
        .typewriter h1 {
          color: #fff;
          font-family: monospace;
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          border-right: 0.15em solid white; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          margin: 0 auto; /* Gives that scrolling effect as the typing happens */
          letter-spacing: 0.15em; /* Adjust as needed */
          animation: typing 3.5s steps(30, end),
            blink-caret 1s step-end infinite;
        }

        /* The typing effect */
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        /* The typewriter cursor effect */
        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default TypeWriterComponent;
