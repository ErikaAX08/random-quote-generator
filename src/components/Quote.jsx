import React from "react";
import styles from "./Quote.module.css";

function Quote() {
  return (
    <div className={styles.container}>
      <div className={styles.quoteContainer}>
        <h1 className={styles.quoteText}>
          “The first rule of any technology used in a business is that
          automation applied to an efficient operation will magnify the
          efficiency. The second is that automation applied to an inefficient
          operation will magnify the inefficiency.”
        </h1>
      </div>
    </div>
  );
}

export default Quote;
