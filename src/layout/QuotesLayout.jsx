import React from "react";
import { useNavigate } from "react-router-dom";
import Quote from "../components/Quote";
import styles from "./QuotesLayout.module.css";

function QuotesLayout() {
  const navigation = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.authorContainer}>
        <span
          onClick={() => navigation("/")}
          className={`material-symbols-outlined ${styles.icon}`}
        >
          arrow_back
        </span>
        <h1 className={styles.authorText}>Bill Gates</h1>
      </div>
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
      <Quote />
    </section>
  );
}

export default QuotesLayout;
