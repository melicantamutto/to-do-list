import { db } from "../firebase-config";

const Task = ({ task }) => {

  const deleteFromFirebase = () =>{
    db.collection("tasks")
      .doc(task.id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  const editFromFirebase = (item) =>{
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
  }

  const handlerDelete = () => deleteFromFirebase();

  const handlerComplete = () => editFromFirebase(task);

  return (
    <li className="task" id={task.id}>
      <p className={`task-text ${task.completed && "completed"}`}>
        {task.text}
      </p>
      <button
        onClick={handlerComplete}
        className={`check-button ${task.completed && "red-button"}`}
      >
        <i className={`fas ${task.completed ? "fa-times" : "fa-check"}`}></i>
      </button>
      <button onClick={handlerDelete} className="delete-button">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Task;
