function List({ existingToDos, addTodos, filterTodos }) {
  function getFilteredTodos() {
    const filteredTodos = existingToDos.filter((todo) => !todo.isRemoved);
    switch (filterTodos) {
      case "active":
        return filteredTodos.filter((todo) => !todo.isCompleted);
      case "completed":
        return filteredTodos.filter((todo) => todo.isCompleted);
      default:
        return filteredTodos;
    }
  }
  const handleToggle = (index) => {
    const updatedToDos = existingToDos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    addTodos(updatedToDos);
  };
  const handleRemove = (index) => {
    const updatedTodos = [...existingToDos];
    updatedTodos.splice(index, 1);
    addTodos(updatedTodos);
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {getFilteredTodos().map((todo, index) => (
          <li
            key={index}
            className={todo.isCompleted === true ? "completed" : ""}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleToggle(index)}
              />
              <label>{todo.todoDesc}</label>
              <button
                type="button"
                className="destroy"
                onClick={() => handleRemove(index)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
