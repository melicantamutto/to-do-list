const Select = ({ setStatus }) => {
  const handlerStatus = (e) => setStatus(e.target.value);

  return (
    <div className="select-container">
      <select
        name="showTasks"
        className="filter-button"
        id="showTasks"
        onChange={handlerStatus}
      >
        <option value="all">Todas</option>
        <option value="done">Completas</option>
        <option value="pending">Incompletas</option>
      </select>
    </div>
  );
};

export default Select;
