import SelectInput from "./SelectInput";
import Input from "./Input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "fit-content",
    backgroundColor: "#f8edeb",
    margin: "2rem auto",
    borderRadius: "10px",
    padding: "0.25rem 0.75rem",
    "@media (max-width:660px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
}));

const Form = ({ setTasks, tasks, setInputText, inputText, setStatus }) => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <Input
        setTasks={setTasks}
        tasks={tasks}
        setInputText={setInputText}
        inputText={inputText}
      />
      <SelectInput setStatus={setStatus} />
    </form>
  );
};

export default Form;
