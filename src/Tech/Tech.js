import React, { useState, useEffect } from "react";
import styles from "../World/world.module.css";

function Tech() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const Newdata = await fetch(
      "http://newsapi.org/v2/everything?" +
        "q=Apple&" +
        "from=2020-04-07&" +
        "sortBy=popularity&" +
        "apiKey=22834ea9211247c390fc7419f6b0f406"
    );

    const item = await Newdata.json();
    console.log(item.articles);
    setItem(item.articles);
  };

  return (
    <div className={styles.newWorld}>
      {item.map((article) => (
        <>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt="bbc-images" />
          <p>{article.description}</p>
          <p>{article.content}</p>
          <h4>{article.publishedAt}</h4>
        </>
      ))}
    </div>
  );
}

export default Tech;
