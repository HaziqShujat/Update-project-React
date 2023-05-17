import React, { useState } from "react";
import Card from "../Card/card";
import ExpenseFilter from "./ExpenseFilter";
import MovingExpens from "./MovingExpens";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const { itms } = props;
  const [filteredyear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); //select the default year 2020
  };
  // console.log(filteredyear);

  const FilterdChange = itms && itms.length >0 && itms.filter((exp) => {
    //filterd expense according to year
    const date = new Date(exp.date );
    return date?.getFullYear().toString() === filteredyear;
    
  });

  return (
    <Card>
      
      <ExpenseFilter
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
      />
       <ExpenseChart Expenses ={FilterdChange} />
     
      <MovingExpens Exps={FilterdChange} />
    </Card>
  );
}

export default Expenses;

/* <ExpenseItms 
        title={itms[0].title}
        amount={itms[0].amount}
        date={itms[0].date}
      />
      <ExpenseItms
        title={itms[1].title}
        amount={itms[1].amount}
        date={itms[1].date}
      />
      <ExpenseItms
        title={itms[2].title}
        amount={itms[2].amount}
        date={itms[2].date}
      />
      <ExpenseItms
        title={itms[3].title}
        amount={itms[3].amount}
        date={itms[3].date}
      />
      <ExpenseItms
        title={itms[3].title}
        amount={itms[3].amount}
        date={itms[3].date}
      />
      <ExpenseItms
        title={itms[3].title}
        amount={itms[3].amount}
        date={itms[3].date}
      
      />
      <ExpenseItms
        title={itms[3].title}
        amount={itms[3].amount} // data add in the card that wrap 
        date={itms[3].date}
      /> */
