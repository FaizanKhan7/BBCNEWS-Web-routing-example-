import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./business.module.css";
import Header from "../Header/header";
class BusinessNews extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.businessStyle}>
          <h1>Business News</h1>
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
