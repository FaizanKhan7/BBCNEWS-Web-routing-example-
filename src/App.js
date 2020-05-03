import React from "react";
import Nav from "./Nav/Nav";
import World from "./World/World";
import Tech from "./Tech/Tech";
import Bitcoin from "./Bitcoin/Bitcoin";
import Home from "./Home";
import styles from "./app.module.css";
import Footer from "./Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tech" component={Tech} />
          <Route path="/world" component={World} />
          <Route path="/bitcoin" component={Bitcoin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
