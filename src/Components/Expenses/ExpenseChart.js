import React from "react";
import Chart from "../Chart/Chart";

function ExpenseChart (props){

    const myArray = props.Expenses;
    // console.log(myArray);
    
    
    const ChartDatapoints =[
        {label:'jan', value:0},
        {label:'feb', value:0},
        {label:'March', value:0},
        {label:'Aprl', value:0},
        {label:'May', value:0},
        {label:'june', value:0},
        {label:'july', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0}
    ];
    myArray.forEach(item =>{ 
        const currentMonth = +(item.date.substring(5, item.date.length - 3))
        ChartDatapoints[currentMonth - 1].value +=1;
    
    })

    for(const expense in props.expense){
        const expenseMonth= expense.date.getMonth();  // startig from 0 jan= 0
        console.log({expenseMonth})
        ChartDatapoints[expenseMonth].value = +expense.amount;

    }

    return <Chart   DataPoints={ChartDatapoints} />

};



export default ExpenseChart;