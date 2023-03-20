import React from "react";
import { useState } from "react";
function Header({ existingToDos, addTodos }) {
  const [todo, setTodo] = useState({ todoDesc: "", isCompleted: false });
  const onChangeInput = (e) => {
    setTodo({
      [e.target.name]: e.target.value,
      isCompleted: false,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.todoDesc === "") {
      return false;
    }
    addTodos([...existingToDos, todo]);
    setTodo({ todoDesc: "" });
  };
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={todo.todoDesc}
            onChange={onChangeInput}
            name="todoDesc"
          />
        </form>
      </header>
    </section>
  );
}

export default Header;
