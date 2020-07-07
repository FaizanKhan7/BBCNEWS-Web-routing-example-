import React from "react";
import styles from "./header.module.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className={styles.logo}>
          <h2>
            news <span>real</span>
          </h2>
        </div>
      </>
    );
  }
}

export default Header;
