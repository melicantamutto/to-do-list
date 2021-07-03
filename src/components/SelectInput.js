import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectInput = ({ setStatus }) => {
  const classes = useStyles();
  const handlerStatus = (e) => setStatus(e.target.value);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-order-native-simple">Show</InputLabel>
      <Select
        native
        label="Show"
        onChange={handlerStatus}
        name="showTasks"
        inputProps={{
          name: "Show",
          id: "outlined-Show-native-simple",
        }}
      >
        <option aria-label="None" value="" />
        <option value="all">All</option>
        <option value="done">Completed</option>
        <option value="pending">Incomplete</option>
      </Select>
    </FormControl>
  );
};

export default SelectInput;
