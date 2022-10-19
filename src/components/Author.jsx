import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Author.module.css";

function Author({ author, genre }) {
  const navigation = useNavigate();

  return (
    <div className={styles.container}>
      <div
        className={styles.authorContainer}
        onClick={() => navigation(`/author/${author}`)}
      >
        <div>
          <h2 className={styles.authorText}>{author}</h2>
          <p className={styles.genreText}>{genre}</p>
        </div>
        <div>
          <img src="/east.svg" className={styles.icon} alt="Author" />
        </div>
      </div>
    </div>
  );
}

export default Author;
