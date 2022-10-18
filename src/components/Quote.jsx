import React from "react";
import styles from "./Quote.module.css";

function Quote({ quote }) {
  return (
    <div className={styles.container}>
      <div className={styles.quoteContainer}>
        <h1 className={styles.quoteText}>{`“${quote}”`}</h1>
      </div>
    </div>
  );
}

export default Quote;
