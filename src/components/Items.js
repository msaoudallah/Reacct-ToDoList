import React from "react";
import Item from "./Item";

const Items = props => {
  return props.list.map(item => (
    <Item
      todo={item.text}
      key={item.id}
      id={item.id}
      showEditText={item.showEdit}
      showButtons={item.finished}
      textChanged={e => props.handleChange(e, item.id)}
      editClicked={e => props.handleEdit(e, item.id)}
      endClicked={e => props.handleEnd(e, item.id)}
      deleteClicked={e => props.handleDelete(e, item.id)}
    />
  ));
};

export default Items;
