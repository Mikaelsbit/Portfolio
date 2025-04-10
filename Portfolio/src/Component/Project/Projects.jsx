import React, { useState } from "react";
import ProjectCard from "./projectCard";
import projectsdata from "../../data/Projects.json";
import classes from "./project.module.css";
export default function Projects() {
  const [projects, setProjects] = useState(projectsdata);

  return (
    <section className="projects_container">
      <div className={classes.heading} id="Projects">
        <h1>Projects</h1>
      </div>
      <div className={classes.card_container}>
        {projects.map((info) => (
          <ProjectCard
            key={info.id}
            title={info.title}
            description={info.description}
            link={info.link}
            img={info.img_link}
            source = {info.source}
          />
        ))}
      </div>
    </section>
  );
}
