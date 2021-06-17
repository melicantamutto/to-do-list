const Task = ({ task }) => {
  return (
    <li className="task" id={task.id}>
      <p className={`task-text ${task.completed && "completed"}`}>{task.text}</p>
      <button

        className={`check-button ${task.completed && "red-button"}`}
      >
        <i className={`fas ${task.completed ? "fa-times" : "fa-check"}`}></i>
      </button>
      <button  className="delete-button">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Task;
