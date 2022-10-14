import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        created by{" "}
        <a
          className={styles.footerLink}
          href="https://github.com/ErikaAX08"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erika AX
        </a>{" "}
        - devChallenges.io
      </p>
    </footer>
  );
}
