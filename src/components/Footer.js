import React from "react";

function Footer({ filterTodos, setfilterTodos }) {
  return (
    <section>
      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <button
              href="#/"
              className={filterTodos === "all" ? "selected" : ""}
              onClick={() => {
                setfilterTodos("all");
              }}
            >
              All
            </button>
          </li>
          <li>
            <button
              href="#/"
              className={filterTodos === "active" ? "selected" : ""}
              onClick={() => setfilterTodos("active")}
            >
              Active
            </button>
          </li>
          <li>
            <button
              href="#/"
              className={filterTodos === "completed" ? "selected" : ""}
              onClick={() => setfilterTodos("completed")}
            >
              Completed
            </button>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Oğuz Bayraktutan</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </section>
  );
}

export default Footer;
