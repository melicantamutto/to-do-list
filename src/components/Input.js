import { db } from "../firebase-config";

const Input = ({ setTasks, tasks, setInputText, inputText }) => {
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
      <div className="input-container">
        <input type="text" onChange={inputTextHandler} value={inputText} />
        <button
          disabled={inputText.trim().length === 0}
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
