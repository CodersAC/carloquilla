import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            className={styles.icons}
            src={getImageUrl("contact/gmail.png")}
            alt="Email icon"
          />
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=carlogarciaquilla@gmail.com">
            carlogarciaquilla@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.icons}
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/carloquilla">
            www.linkedin.com/in/carloquilla
          </a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.icons}
            src={getImageUrl("contact/github.png")}
            alt="Github icon"
          />
          <a href="https://github.com/CodersAC">github.com/CodersAC</a>
        </li>
      </ul>
    </footer>
  );
};
