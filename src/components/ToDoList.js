import Task from "./Task";

const ToDoList = ({tasks, setTasks }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
      {tasks.map(task => (
          <Task 
            task={task} 
            tasks={tasks}
            setTasks={setTasks}
            key={task.id} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
