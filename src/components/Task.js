const Task = ({ task, setTasks, tasks }) => {

  const handlerDelete = () => {
    setTasks(tasks.filter((item) => item.id !== task.id));
  };

  const handlerComplete = () => {
    setTasks(tasks.map(item => {
      if(task.id === item.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <li className="task" id={task.id}>
      <p className={`task-text ${task.completed && "completed"}`}>{task.text}</p>
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
