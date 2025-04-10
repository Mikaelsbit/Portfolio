import React from "react";
import classes from "./tech.module.css";
import cs from "../../assets/Icons/css-3.png";
import HT from "../../assets/Icons/html-5.png";
import BT from "../../assets/Icons/bootstrap.png";
import jq from "../../assets/Icons/jquery.png";
import js from "../../assets/Icons/js.png";
import sql from "../../assets/Icons/Mysql.png";
import Njs from "../../assets/Icons/Nodejs.png";
import RT from "../../assets/Icons/react.png";
import dom from "../../assets/Icons/diagram.png";
import exp from "../../assets/Icons/express.png";
import fbs from "../../assets/Icons/firebase.png";

const techIcons = [
  { src: HT, alt: "HTML5 logo" },
  { src: cs, alt: "CSS3 logo" },
  { src: BT, alt: "Bootstrap logo" },
  { src: js, alt: "JavaScript logo" },
  { src: dom, alt: "DOM diagram" },
  { src: jq, alt: "jQuery logo" },
  { src: RT, alt: "React logo" },
  { src: Njs, alt: "Node.js logo" },
  { src: exp, alt: "Express logo" },
  { src: sql, alt: "MySQL logo" },
  { src: fbs, alt: "firebase logo" },
];

export default function Technologies() {
  return (
    <section className={classes.tech_container} id="Technologies">
      <div className={classes.title}>
        <h1>My Technologies</h1>
      </div>
      <div className={classes.tech_wrapper}>
        <div className={classes.desc}>
          <h1>
            These are the languages and tools i use the most in my applications.
          </h1>
          <small>
            I build simple and responsive UI's thats easier for users to
            navigate and asthetic to look at with these technologies
          </small>
        </div>
        <div className={classes.tech_icons}>
          {techIcons.map((icon, i) => (
            <div key={i} className={classes.icon_holder}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
