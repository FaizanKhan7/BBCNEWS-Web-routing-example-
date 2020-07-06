import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import styles from "./real.module.css";
import Tile from "./Tile/Tile";
import BusinessRoutes from "./business/BusinessNews";
import TechnologyRoutes from "./technology/technology";
import HealthRoutes from "./health/health";
import ScienceRoutes from "./science/science";
import SportsRoutes from "./sports/sports";
import Footer from "./Footer/Footer";

function Real() {
  return (
    <>
      <div className={styles.logo}>
        <h1>
          news <span>real</span>
        </h1>
      </div>
      <div className={styles.content}>
        <p>Checkout the latest updates accross the world</p>

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
