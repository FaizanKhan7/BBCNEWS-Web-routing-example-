import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./business.module.css";

class BusinessNews extends Component {
  render() {
    return (
      <>
        <div className={styles.businessStyle}>
          <h1> hello world </h1>
        </div>
      </>
    );
  }
}

function BusinessRoutes() {
  return (
    <Switch>
      <Route path="/business" exact component={BusinessNews} />
    </Switch>
  );
}

export default BusinessRoutes;
