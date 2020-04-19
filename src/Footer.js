import React, { Component } from "react";
import styles from "./footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={styles.mainfooter}>
        <p>&copy; BBC NEWS</p>
      </div>
    );
  }
}

export default Footer;
