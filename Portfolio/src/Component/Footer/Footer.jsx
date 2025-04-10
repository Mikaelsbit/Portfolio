import React from "react";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <section className={classes.footer}>
      <div className={classes.rights}>
        <div>
          <h2>
            Bi<span>ru</span>{" "}
          </h2>
        </div>
        <div>
          <p>
            &#169; 2025 <a href="https://github.com/Mikaelsbit">Mikaelsbit </a>
            All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
