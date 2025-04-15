import React from "react";
import classes from "./hero.module.css";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.info}>
        <div>
          <p>Hello There, Welcome to my site</p>
          {/* description */}
          <h2>
            I'm Micahel Biru <br />
            <span>A Full Stack Web Developer</span> <br />
          </h2>
          <h1>&#x1F4CD; Virginia, US</h1>
        </div>

        <div className={classes.resume}>
          <div>
            <button>
              <FileDownloadIcon /> Resume
            </button>
          </div>
          <div>
            <a href="https://mdawit384@gmail.com" target="_blank">
              <GitHubIcon fontSize="large" />
              {/* mdawit384@gmail.com */}
            </a>
            <a
              href="https://linkedin.com/in/mikaelsbit21"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
              {/* linkedin */}
            </a>
            <a href="https://github.com/Mikaelsbit" target="_blank">
              <EmailIcon fontSize="large" />
              {/* github.com/Mikaelsbit */}
            </a>
          </div>
        </div>
      </div>

      <div className={classes.img}>
        {/* image */}
        <img
          src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
          alt="Student image"
        />
      </div>
    </section>
  );
}
