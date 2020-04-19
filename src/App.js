import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import services from "./Services";
import About from "./About";
import shop from "./shop";
import Contact from "./Contact";
import styles from "./app.module.css";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Nav />
        <Switch>
          <Route path="/" exact component={shop} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={services} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
