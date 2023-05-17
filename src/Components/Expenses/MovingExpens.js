import React from "react";
import ExpenseItms from "./expenseItms";

function MovingExpens (props) {

    const{Exps} =(props);
//   let fexpnseCheck = <p>NOExpense Found</p>;

  if(Exps && Exps.length===0){
    return <h1 className="flex justify-center text-lg font-bold text-slate-200">FOUND No Expness</h1>;
  };

  return(
    <ul>
        {
            Exps &&  Exps.length > 0 && Exps.map(
                (
                  expense //expense name pass
                ) => (
                  <ExpenseItms
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                  />
                ))

        }
    </ul>
  )

};




export default MovingExpens;