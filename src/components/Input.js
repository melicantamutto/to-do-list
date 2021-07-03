import { db } from "../firebase-config";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: '25rem',
      margin: theme.spacing(1),
    },
  },
  addButton: {
    borderRadius: "5px",
    color: '#e29578'
  },
}));

const Input = ({ setTasks, tasks, setInputText, inputText }) => {
  const classes = useStyles();
  const addToFirebase = (task) => {
    db.collection("tasks")
      .add(task)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const addTaskhandler = (e) => {
    e.preventDefault();
    const task = {
      text: inputText,
      completed: false,
      id: Math.random() * 10000,
    };
    setTasks([...tasks, task]);
    addToFirebase(task);
    setInputText("");
  };

  const inputTextHandler = (e) => setInputText(e.target.value);

  return (
    <>
      <div className={classes.root}>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-newAssignment">
            Add Task
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-newAssignment"
            type="text"
            value={inputText}
            onChange={inputTextHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={addTaskhandler}
                  disabled={inputText.trim().length === 0}
                  edge="end"
                  type="submit"
                  className={classes.addButton}
                >
                  <i className="fas fa-plus-square"></i>
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </div>
    </>
  );
};

export default Input;
