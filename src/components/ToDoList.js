import Task from "./Task";

const ToDoList = ({ filteredTasks }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
