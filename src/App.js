import React, { useState, useRef } from "react";
import Separator from "./components/Separator";
import Items from "./components/Items";

import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const [disabled, setDisabled] = useState(false);

  // let todohaya = {
  //   text: "",
  //   id: todo.length,
  //   finished: false,
  //   showEdit: false
  // };

  const todohaya = useRef({
    text: "",
    id: 0,
    finished: false,
    showEdit: false
  });
  const handleChange = e => {
    todohaya.current.text = e.target.value;

    e.preventDefault();
  };

  const handleSubmit = e => {
    if (todohaya.current.text === "") {
      alert("please enter you todo text");
    } else {
      const todos = [...todo];
      //const it = Object.assign({},todohaya);
      // it.current.id  = todo.length;
      //console.log(it);
      todohaya.current.id = todo.length;
      todos.push({ ...todohaya.current });
      todohaya.current.text = "";
      e.target[0].value = "";
      setTodo(todos);
    }
    //setUniqueID(uniqueID+1);

    e.preventDefault();
  };

  const editChangeHandler = (e, id) => {
    console.log("editChangeHandler");
    const todos = [...todo];
    const todoIndex = todos.findIndex(t => t.id === id);
    const todoItem = todos[todoIndex];
    todoItem.showEdit = !todos[todoIndex].showEdit;
    setDisabled(!disabled);
    setTodo([...todos]);
    e.preventDefault();

    //const todoIndex = todos.find(t => t === id)
  };
  const textChangeHandler = (e, id) => {
    const todos = [...todo];
    const todoIndex = todos.findIndex(t => t.id === id);
    const todoItem = todos[todoIndex];
    todoItem.text = e.target.value;

    setTodo([...todos]);
    e.preventDefault();
  };

  const deleteChangeHandler = (e, id) => {
    let todos = [...todo];
    const todoIndex = todos.findIndex(t => t.id === id);

    todos.splice(todoIndex, 1);
    if (id !== todos.length) {
      todos.filter(t => t.id > 0).map(t => (t.id = t.id - 1));
    }

    setTodo([...todos]);
    e.preventDefault();
  };
  const endChangeHandler = (e, id) => {
    const todos = [...todo];
    const dones = [...done];
    const todoIndex = todos.findIndex(t => t.id === id);

    const todoItem = todos[todoIndex];
    todoItem.finished = true;
    todoItem.showEdit = false;
    const doneItem = { ...todoItem };
    doneItem.id = dones.length;

    todos.splice(todoIndex, 1);
    todos.filter(t => t.id > 0 && t.id > id).map(t => (t.id = t.id - 1));

    dones.push(doneItem);

    setTodo([...todos]);
    setDone([...dones]);
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Separator />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} disabled={disabled} />
        <input type="submit" value="Add Item" />
      </form>

      {todo.length > 0 || done.length > 0 ? (
        <>
          <Separator />
          <h2>{todo.length > 0 ? "ToDo" : done.length > 0 ? "Done" : ""}</h2>
        </>
      ) : null}
      {
        //console.log(todo)
      }
      <Items
        list={[...todo]}
        handleEdit={editChangeHandler}
        handleChange={textChangeHandler}
        handleEnd={endChangeHandler}
        handleDelete={deleteChangeHandler}
      />
      {todo.length > 0 && done.length > 0 ? (
        <>
          <Separator />
          <h2>Done</h2>
        </>
      ) : null}
      <Items list={done} />
    </div>
  );
}
