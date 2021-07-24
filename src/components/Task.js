import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: 'wrap',
    padding: "0.4rem",
    marginBottom: "0.75rem",
    backgroundColor: "#f4f3ee",
    alignItems: "center",
    "@media (max-width:660px)": {
      flexDirection: "column",
    },
  },
  content: {
    flex: "1 0 auto",

  },
  mainText: {
    textAlign: "left",

  },
  buttonsContainer:{
    
  },
  buttons: {
    background: "#643939",
    color: "white",
    border: "none",
    padding: "1rem",
    cursor: "pointer",
    fontSize: "1rem",
    "&> .fa-times": {
      padding: "0 0.16rem",
    },
  },

  checkButton: {
    background: "rgb(87, 179, 151)",
  },
  redButton: {
    backgroundColor: "#a73636",
  },
  completed: {
    textDecoration: "line-through",
    opacity: "0.5",
  },
}));

const Task = ({ task, tasks,setTasks }) => {
  const classes = useStyles();

  const deleteFromStorage = () => {
    setTasks(tasks.filter(item => item.id !== task.id))
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const editFromStorage = () => {
    setTasks(tasks.map(item => {
      if(task.id === item.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const handlerDelete = () => deleteFromStorage();

  const handlerComplete = () => editFromStorage();

  return (
    <Card className={classes.root} id={task.id}>
      <CardContent className={classes.content}>
        <Typography
          component="p"
          variant="body1"
          className={`${classes.mainText} ${
            task.completed && classes.completed
          }`}
        >
          {task.text}
        </Typography>
      </CardContent>
      <div className={classes.buttonsContainer}>
        <button
          onClick={handlerComplete}
          className={`${classes.buttons} ${classes.checkButton} ${
            task.completed && classes.redButton
          }`}
        >
          <i className={`fas ${task.completed ? "fa-times" : "fa-check"}`}></i>
        </button>

        <button onClick={handlerDelete} className={classes.buttons}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </Card>
  );
};

export default Task;
