import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Nav extends React.Component {
  onhit = (e) => {
    e.preventDefault();
    toast.error("Coming Soon!", {
      autoClose: 2000,
    });
  };
  render() {
    return (
      <nav>
        <Link to="/">
          <h3>News Real</h3>
        </Link>
        <ul className={styles.navlinks}>
          <Link to="/World">
            <li className={styles.listStyles}>World</li>
          </Link>
          <Link to="/Tech">
            <li className={styles.listStyles}>Tech</li>
          </Link>
          <Link to="/Bitcoin">
            <li className={styles.listStyles}>Bitcoin</li>
          </Link>
          <Link to="/More">
            <li onClick={(e) => this.onhit(e)} className={styles.listStyles}>
              More
            </li>
            <ToastContainer />
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
