import { db } from "../firebase-config";
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

const Task = ({ task }) => {
  const classes = useStyles();

  const deleteFromFirebase = () => {
    db.collection("tasks")
      .doc(task.id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const editFromFirebase = (item) => {
    db.collection("tasks")
      .doc(item.id)
      .set({
        ...item,
        completed: !item.completed,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const handlerDelete = () => deleteFromFirebase();

  const handlerComplete = () => editFromFirebase(task);

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
