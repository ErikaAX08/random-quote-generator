import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Author.module.css";

function Author() {
  const navigation = useNavigate();

  return (
    <div className={styles.container}>
      <div
        className={styles.authorContainer}
        onClick={() => navigation("author")}
      >
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
