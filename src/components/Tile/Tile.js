import React from "react";
import styles from "./tile.module.css";

function Tile(props) {
  return (
    <div className={styles.tiles} onClick={props.onClick}>
      <h3>{props.name}</h3>
    </div>
  );
}

export default Tile;
