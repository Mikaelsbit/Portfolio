import React from "react";
import classes from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={classes.contact} id="Contact">
      <div className={classes.rights}>
        <div>
          <h2>Biru</h2>
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
