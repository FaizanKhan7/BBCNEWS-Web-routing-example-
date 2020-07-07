import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import styles from "./real.module.css";
import Tile from "./components/Tile/Tile";
import BusinessRoutes from "./business/BusinessNews";
import TechnologyRoutes from "./technology/technology";
import HealthRoutes from "./health/health";
import ScienceRoutes from "./science/science";
import SportsRoutes from "./sports/sports";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
function Real() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <p>
          Checkout the latest updates on Business, Technology, Science, Health &
          Sports accross the world
        </p>

        <Link to="/business">
          <Tile name="Business" />
        </Link>
        <Link to="/technology">
          <Tile name="Technology" />
        </Link>
        <Link to="/health">
          <Tile name="Health" />
        </Link>
        <Link to="/science">
          <Tile name="Science" />
        </Link>
        <Link to="/sports">
          <Tile name="Sports" />
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Real} />
      <Route path="/business" component={BusinessRoutes} />
      <Route path="/technology" component={TechnologyRoutes} />
      <Route path="/health" component={HealthRoutes} />
      <Route path="/science" component={ScienceRoutes} />
      <Route path="/sports" component={SportsRoutes} />
    </Switch>
  );
}
