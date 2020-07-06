import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./technology.module.css";

class TechnologyNews extends Component {
  render() {
    return (
      <>
        <div className={styles.technologyStyle}>
          <h1> hello technology </h1>
        </div>
      </>
    );
  }
}

function TechnologyRoutes() {
  return (
    <Switch>
      <Route path="/technology" exact component={TechnologyNews} />
    </Switch>
  );
}

export default TechnologyRoutes;
