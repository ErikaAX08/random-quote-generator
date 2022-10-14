import React from "react";
import styles from "./Random.module.css";

function Random() {
  return (
    <div className={styles.randomContainer}>
      <p className={styles.randomText}>
        random <span className="material-symbols-outlined">autorenew</span>
      </p>
    </div>
  );
}

export default Random;
