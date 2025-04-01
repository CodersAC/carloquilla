import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImageUrl("about/carloBusy.png")}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.icons}
              src={getImageUrl("about/frontend.png")}
              alt="Frontend"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I created a user interface by transitioning from traditional web
                development (HTML, CSS, and JavaScript) to using frameworks like
                React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.icons}
              src={getImageUrl("about/backend.png")}
              alt="Backend"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I connected the frontend to the backend (database) by building a
                CRUD app, using Java with JSwing for a local project and Python
                for OCR functionality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.icons}
              src={getImageUrl("about/design.png")}
              alt="UX/UI"
            />
            <div className={styles.aboutItemText}>
              <h3>UX/UI Designer</h3>
              <p>
                I designed layouts for a website and a mobile app, with a focus
                on user-friendly interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
