import React, { useState } from "react";
import classes from "./header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className={classes.header}>
      <div className={classes.Navbar}>
        <div className={classes.leftSide}>
          <div>
            <h2>
              Bi<span>ru</span>
            </h2>
          </div>
        </div>

        <div className={classes.rightSide}>
          <button className={classes.navToggle} onClick={toggle}>
            ☰
          </button>
          <ul className={`${isOpen ? classes.show : ""}`}>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Technologies">Technologies</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>

            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
