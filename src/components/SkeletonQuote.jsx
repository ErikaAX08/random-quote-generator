import React from "react";
import styles from "./Skeleton.module.css";

function SkeletonQuote() {
  return (
    <div>
      <div className={styles.quoteContainer}>
        <div className={styles.quoteText}></div>
        <div className={styles.quoteText}></div>
        <div className={styles.quoteText}></div>
        <div className={styles.quoteText}></div>
        <div className={styles.quoteText}></div>
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorText}></div>
        <div className={styles.genreText}></div>
      </div>
    </div>
  );
}

export default SkeletonQuote;
