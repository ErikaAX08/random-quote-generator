import React from "react";
import Author from "../components/Author";
import Quote from "../components/Quote";
import styles from "./QuoteLayout.module.css";

function QuoteLayout() {
  return (
    <section className={styles.container}>
      <Quote />
      <Author />
    </section>
  );
}

export default QuoteLayout;
