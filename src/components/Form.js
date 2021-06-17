import Select from "./Select";
import Input from "./Input";

const Form = ({ setTasks, tasks, setInputText, inputText }) => {
  return (
    <form>
      <Input
       setTasks={setTasks}
       tasks={tasks}
       setInputText={setInputText}
       inputText={inputText}
      />
      <Select />
    </form>
  );
};

export default Form;
