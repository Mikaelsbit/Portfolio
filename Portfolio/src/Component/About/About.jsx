import React, { useState } from "react";
import classes from "./about.module.css";
export default function About() {
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
              I'm a front-end Developer that can build a responsive <br /> and
              optimized sites
            </p>
          </div>
          <div className={classes.backEnd}>
            <h2>Backend Developer</h2>
            <p>
              I have some experience in developing basic <br /> back-end systems and
              APIs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
