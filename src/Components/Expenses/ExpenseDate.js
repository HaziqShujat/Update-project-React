import React from "react";


function ExpenseDate (props){
    const {  date } = props; //destructured propsto date or any name

    // const year = date.getFullYear();
   

    return (
        <div className="p-2 bg-gray-600-400 w-40 h-20 rounded-lg flex justify-center text-center bg-slate-300 font-thin font-serif  border-purple-700" >
         <div> { date } </div>
         {/* <div> {year} </div> */}
         {/* <div> {day} </div> */}
      </div>
    )



};



export default ExpenseDate;
