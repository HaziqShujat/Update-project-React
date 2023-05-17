import React from "react";

const ExpenseFilter = (props) => {
  const Dropdown = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="flex  justify-between ">
      <label className="text-lg  font-bold text-blue-50">Filterd Expense</label>
      <div>
        <select value={props.selected} onChange={Dropdown}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
