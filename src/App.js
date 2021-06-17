import { useState, useEffect } from "react";
import "./App.css";
import Form from "../avances/Form";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);
 
   useEffect(() => {
     const getLocalTasks = (()=>{
       if(localStorage.getItem('tasks') == null){
         localStorage.setItem("tasks", JSON.stringify(tasks))
       } else{
         const tasksLocal = JSON.parse(localStorage.getItem('tasks'));
         setTasks(tasksLocal);
       } 
     }
     ) 
    getLocalTasks();
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
    const saveLocalTasks = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    saveLocalTasks();
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
        setTasks={setTasks}
        tasks={tasks}
      />
    </>
  );
};

export default App;
