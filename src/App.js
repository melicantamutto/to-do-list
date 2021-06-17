import { useState } from "react";
import "./App.css";
import Form from "../avances/Form";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <>
      <header>
        <h1>To-do List</h1>
      </header>
      <Form
        setTasks={setTasks}
        tasks={tasks}
        setInputText={setInputText}
        inputText={inputText}
      />
      <ToDoList
        setTasks={setTasks}
        tasks={tasks}
      />
    </>
  );
};

export default App;
