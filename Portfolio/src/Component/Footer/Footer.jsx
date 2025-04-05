import React from 'react'
import classes from './footer.module.css'
export default function Footer() {
  return (
    <section className={classes.contact}>
      <div>
        <h1>Contact Me</h1>
        <h3>Feel Free to reach Contact me</h3>
      </div>
      <div>
        <ul>
          <li><a href="" target="_blank">email</a></li>
          <li><a href="" target="_blank">linkedin</a></li>
          <li><a href="" target="_blank">github</a></li>
        </ul>
      </div>
    </section>
  )
}
