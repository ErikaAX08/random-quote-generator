import React from "react";
import { useSelector } from "react-redux";

import Author from "../components/Author";
import Quote from "../components/Quote";
import SkeletonQuote from "../components/SkeletonQuote";
import styles from "./QuoteLayout.module.css";

function QuoteLayout() {
  const { data, state } = useSelector((state) => state.quote);

  return state === "loading" ? (
    <section className={styles.container}>
      <SkeletonQuote />
    </section>
  ) : (
    <section className={styles.container}>
      <Quote quote={data.quoteText} />
      <Author author={data.quoteAuthor} genre={data.quoteGenre} />
    </section>
  );
}

export default QuoteLayout;
