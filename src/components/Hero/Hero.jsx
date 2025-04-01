import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Carlo Quilla</h1>
        <p className={styles.description}>
          I'm a full-stack developer with hands-on experience building small
          applications with React and connecting databases. Please contact me if
          you have any questions!
        </p>
        <a
          className={styles.contactBtn}
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=carlogarciaquilla@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/carlo.png")} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
