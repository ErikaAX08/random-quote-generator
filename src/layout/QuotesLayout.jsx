import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Quote from "../components/Quote";
import SkeletonQuotes from "../components/SkeletonQuotes";
import { useGetAuthorQuotesQuery } from "../store/api/quoteApi";
import { setQuotes, setState } from "../store/slices/quotesSlice";
import styles from "./QuotesLayout.module.css";

function QuotesLayout() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { name } = useParams();
  const { data, isLoading } = useGetAuthorQuotesQuery(name);
  const quotes = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(setState(isLoading ? "loading" : "loaded"));
  }, [isLoading]);

  useEffect(() => {
    isLoading === false && dispatch(setQuotes(data.data));
  }, [data]);

  return (
    <section className={styles.container}>
      <div className={styles.authorContainer}>
        <img
          src="/arrow_back.svg"
          className={styles.icon}
          alt="Back"
          onClick={() => navigation("/")}
        />
        <h1 className={styles.authorText}>{name}</h1>
      </div>

      {isLoading ? (
        <div className={styles.skeletonContainer}>
          <SkeletonQuotes />
          <SkeletonQuotes />
          <SkeletonQuotes />
          <SkeletonQuotes />
          <SkeletonQuotes />
          <SkeletonQuotes />
        </div>
      ) : (
        quotes.data.map((quote) => (
          <Quote key={quote._id} quote={quote.quoteText} />
        ))
      )}
    </section>
  );
}

export default QuotesLayout;
