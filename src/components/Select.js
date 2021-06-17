const Select = () => {
  return (
    <div className="select-container">
      <select name="showTasks" className="filter-button" id="showTasks">
        <option value="all">Todas</option>
        <option value="done">Completas</option>
        <option value="pending">Incompletas</option>
      </select>
    </div>
  );
};

export default Select;
