import Task from "./Task";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "10rem",
    maxWidth: "fit-content",
    listStyle: "none",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
    margin: "auto",
    "& >*": {
      width: "100%",
    },
  },
}));

const ToDoList = ({ filteredTasks, tasks, setTasks }) => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {filteredTasks.map((task) => (
        <Task 
          setTasks={setTasks} 
          tasks={tasks} 
          task={task} 
          key={task.id} 
        />
      ))}
    </ul>
  );
};

export default ToDoList;
