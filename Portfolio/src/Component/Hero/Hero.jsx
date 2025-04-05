import React from "react";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.info}>
      <p>Hello There, Welcome to my site</p>
        {/* description */}
        <h3>
          I'm Micahel Biru <br /> 
          <span>A Full Stack Web Developer</span> <br />
        </h3>
      </div>

      <div className={classes.img}>
        {/* image */}
        <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="Student image" />
      </div>
    </section>
  );
}
