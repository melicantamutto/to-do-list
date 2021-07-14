import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { db } from "./firebase-config";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    textAlign: "center",
    backgroundColor: "#6d6875",
    minHeight: "100vh",
    padding: "5rem",
    "@media (max-width:780px)": { // eslint-disable-line no-useless-computed-key
      padding: "2rem",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const getFromFirebase = () => {
    db.collection("tasks").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTasks(docs);
    });
  };

  useEffect(getFromFirebase, []);

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
      <CssBaseline />
      <Container maxWidth="xl" className={classes.mainContainer}>
        <Typography
          component="h1"
          variant="h1"
          color="secondary"
          className={classes.mainTitle}
        >
          To-do List
        </Typography>
        <Form
          setTasks={setTasks}
          tasks={tasks}
          setInputText={setInputText}
          inputText={inputText}
          setStatus={setStatus}
        />
        <ToDoList filteredTasks={filteredTasks} />
      </Container>
    </>
  );
};

export default App;
