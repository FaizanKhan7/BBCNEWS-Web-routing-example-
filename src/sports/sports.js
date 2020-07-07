import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./sports.module.css";
import Header from "../components/Header/header";

class SportsNews extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.sportStyle}>
          <h1> hello sports </h1>
        </div>
      </>
    );
  }
}

function SportsRoutes() {
  return (
    <Switch>
      <Route path="/sports" exact component={SportsNews} />
    </Switch>
  );
}

export default SportsRoutes;
