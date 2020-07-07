import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./health.module.css";
import Header from "../components/Header/header";

class HealthNews extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.healthStyle}>
          <h1> hello health </h1>
        </div>
      </>
    );
  }
}

function HealthRoutes() {
  return (
    <Switch>
      <Route path="/health" exact component={HealthNews} />
    </Switch>
  );
}

export default HealthRoutes;
