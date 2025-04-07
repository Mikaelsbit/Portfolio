import React from "react";
import classes from "./projectCard.module.css";
export default function projectCard({title, description,link,img,source}) {
  console.log(title)
  return (
    <section className={classes.projects}>
      <div className={classes.project__container}>
        <div className={classes.project__wrapper}>
          <div className={classes.image}>
            <img
              src={img}
            />
          </div>
          <div className={classes.Details}>
            <h2>
              <span>{title}</span>
            </h2>
            <p>
              {description}
            </p>
          </div>
          <div className={classes.langs}>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </div>
          <div className={classes.btn_demosrc}>
            <button><a href={link} target="_blank">Demo</a></button>
            <button><a href={source} target="_blank">Source</a></button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
