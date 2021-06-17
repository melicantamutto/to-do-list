const Input = ({ setTasks, tasks, setInputText, inputText }) => {
  const addTaskhandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 10000,
      },
    ]);
    setInputText("");
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <>
      <div className="input-container">
        <input 
          type="text" 
          onChange={inputTextHandler} 
          value ={inputText}
        />
        <button 
          disabled= {inputText.trim().length === 0}
          onClick={addTaskhandler} 
          className="add-button" 
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
    </>
  );
};

export default Input;
