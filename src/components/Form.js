import Select from "./Select";
import Input from "./Input";

const Form = ({ setTasks, tasks, setInputText, inputText, setStatus }) => {
  return (
    <form>
      <Input
        setTasks={setTasks}
        tasks={tasks}
        setInputText={setInputText}
        inputText={inputText}
      />
      <Select setStatus={setStatus} />
    </form>
  );
};

export default Form;
