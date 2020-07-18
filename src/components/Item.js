import React from "react";
import styles from "./Item.module.css";

const Item = props => {
  // const gridItem = styles.gridItem;
  // const greenBtn = gridItem + " " + styles.green;
  // const redBtn = gridItem + " " + styles.red;
  // const blueBtn = gridItem + " " + styles.blue;

  return (
    <div className={styles.wrapper}>
      {props.showEditText ? (
        <input
          type="text"
          value={props.todo}
          onChange={event => props.textChanged(event, props.id)}
        />
      ) : (
        <p className={styles.itemLabel}>{props.todo}</p>
      )}
      {!props.showButtons ? (
        <>
          <button
            onClick={event => {
              return props.editClicked(event, props.id);
            }}
          >
            {props.showEditText ? "confirm" : "Edit"}
          </button>
          <button onClick={event => props.endClicked(event, props.id)}>
            End
          </button>
          <button onClick={event => props.deleteClicked(event, props.id)}>
            Delete
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Item;
