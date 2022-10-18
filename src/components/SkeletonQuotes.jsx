import React from "react";
import styles from "./Skeleton.module.css";

function SkeletonQuotes() {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteText}></div>
      <div className={styles.quoteText}></div>
      <div className={styles.quoteText}></div>
      <div className={styles.quoteText}></div>
      <div className={styles.quoteText}></div>
    </div>
  );
}

export default SkeletonQuotes;
