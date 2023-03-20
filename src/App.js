import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [alltodos, setAllTodos] = useState([]);
  const [filterTodos, setfilterTodos] = useState("all");

  return (
    <div className="App">
      <Header existingToDos={alltodos} addTodos={setAllTodos} />
      <List
        existingToDos={alltodos}
        addTodos={setAllTodos}
        filterTodos={filterTodos}
      />
      <Footer filterTodos={filterTodos} setfilterTodos={setfilterTodos} />
    </div>
  );
}

export default App;
