import Task from "./Task";

const ToDoList = ({ tasks, setTasks, filteredTasks }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <Task task={task} tasks={tasks} setTasks={setTasks} key={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
