import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.homestyles}>
      <h1>WELCOME TO BBC NEWS </h1>
      <div className={styles.homeheading}>
        <h2>WELCOME</h2>
        <h2>TO</h2>
        <h2>NEWS REAL </h2>
      </div>
    </div>
  );
}

export default Home;
