import React from "react";
import styles from "./Author.module.css";

function Author() {
  return (
    <div className={styles.container}>
      <div className={styles.authorContainer}>
        <div>
          <h2 className={styles.authorText}>Bill Gates</h2>
          <p className={styles.genreText}>business</p>
        </div>
        <div>
          <span className={`material-symbols-outlined ${styles.icon}`}>
            trending_flat
          </span>
        </div>
      </div>
    </div>
  );
}

export default Author;
