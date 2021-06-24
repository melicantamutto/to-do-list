import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { db } from "./firebase-config";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  
  useEffect(() => {
    const getFromFirebase = () => {
      const docs = [];
      db.collection("tasks")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data, id: doc.id });
          });
        });
      setTasks(docs);
    };
    getFromFirebase();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handlerFilter = () => {
      switch (status) {
        case "done":
          setFilteredTasks(tasks.filter((task) => task.completed === true));
          break;
        case "pending":
          setFilteredTasks(tasks.filter((task) => task.completed === false));
          break;
        default:
          setFilteredTasks(tasks);
          break;
      }
    };
    handlerFilter();
  }, [tasks, status]);

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
        setStatus={setStatus}
      />
      <ToDoList
        filteredTasks={filteredTasks}
      />
    </>
  );
};

export default App;
