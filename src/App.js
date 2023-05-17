import React, {  useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpense";


function App() {

  const existingData = localStorage.getItem("storedata");
  // console.log({existingData});

  const [expense, setNewExpense] = useState(JSON.parse(existingData)); //   use sate to upadte data an add to the existing card
  const addExpenseHandler = (expensearrived) => {
    setNewExpense([expensearrived, ...expense]);  // spread is use to pull out all  the data and add to new one
  };

// console.log(expense);




  return (
    <div className=" gap-y-1 ">
      <NewExpenses onAddExpense={addExpenseHandler} /> 
     

      

      <Expenses itms={expense} /> 
    </div>
  );
}

export default App;
