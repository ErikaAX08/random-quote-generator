import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useGetRandomQuoteQuery } from "../store/api/quoteApi";
import { setState, setQuote } from "../store/slices/quoteSlice";
import styles from "./Random.module.css";

function Random() {
  const { data, isLoading, refetch } = useGetRandomQuoteQuery();
  const { state } = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(setState(isLoading ? "loading" : "loaded"));
  }, [isLoading]);

  useEffect(() => {
    isLoading === false && dispatch(setQuote(data.data[0]));
  }, [data]);

  const random = () => {
    navigation("/");
    refetch();
  };

  return (
    <div className={styles.randomContainer}>
      <p className={styles.randomText} onClick={random}>
        random{" "}
        <img
          src="/sync.svg"
          className={`${styles.icon} ${state === "loading" && "loading"}`}
          alt="Random"
        />
      </p>
    </div>
  );
}

export default Random;
