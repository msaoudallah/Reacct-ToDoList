import React from "react";
import styles from "./Item.module.css";

const Item = props => {
  return (
    <div>
      <p>{props.todo}</p>
      <button className={styles.button}>Edit</button>
      <button>Finish</button>
      <button>Delete</button>
    </div>
  );
};

export default Item;
