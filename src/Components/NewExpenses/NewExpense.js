import React, { useState } from "react";
import ExpenseForm from "./ExpnseForm";

function NewExpenses(props) {
  const [isediting, setisEditing] = useState(false);

  const saveExpenseDataHandler = (enteredexpensedate) => {
    const expensedata = {
      ...enteredexpensedate,
      id: Math.random().toString(),
    };
    <NewExpenses onAddExpense={props.addExpenseHandler} />; // new xpense that accpt props onadexpense and show ad, in the card
    props.onAddExpense(expensedata);
    setisEditing(false);
  };

  const openButton = () => {
    setisEditing(true);

  };

  const oncancel = () =>{
    setisEditing(false);
}
  return (
    <div>
      {!isediting && (
        <button
          onClick={openButton}
          className="   flex justify-center align-middle
           font-bold text-2xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring p-4 mx-auto mt-2  focus:ring-violet-300 text-white cursor-pointer rounded-xl "
        >
          Add Expense
        </button>
      )}
      {isediting && <ExpenseForm OnsaveDate={saveExpenseDataHandler}   aboutcancel={oncancel} />}
    </div>
  );
}

export default NewExpenses;
