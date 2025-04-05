import React, { useState } from "react";
import classes from "./about.module.css";
export default function About() {
  const [dropFront, setDropFront] = useState(false);
  const [dropback, setDropBack] = useState(false);
  const dropDownFront = () => {
    setDropFront(!dropFront);
  };
  const dropDownback = () => {
    setDropBack(!dropback);
  };

  return (
    <section className={classes.About__container} id="About">
      <div className={classes.About_wrapper}>
        <div className={classes.About}>
          About
          <div className={classes.frontBack_img}>
            <img src="https://wallpaperaccess.com/full/4635743.jpg" alt="" />
          </div>
        </div>
        <div className={classes.skill}>
          <div className={classes.frontEnd}>
            <h2>Frontend Developer</h2>
            <p>
              I'm a front-end Developer that can build a responsive and
              optimized sites
            </p>
            <ul
              className={classes.showFrontend}
            >
              <li>Html</li>
              <li>Css</li>
              <li>javaScript</li>
            </ul>
          </div>
          <div className={classes.backEnd}>
            <h2>Backend Developer</h2>
            <p>
              I have some experience in developing basic back-end systems and
              APIs
            </p>
            <ul
              className={classes.showBackend}
            >
              <li>Node Js</li>
              <li>React</li>
              <li>FireBase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
