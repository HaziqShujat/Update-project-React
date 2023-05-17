import React from "react";
import ChartBar from "./ChartBar";

function Chart(props) {
  const {DataPoints} =  props;
  // console.log({DataPoints});

  const  datapointsvalue = DataPoints.map(datapoint => datapoint.value );
  const totalMax = Math.max(...datapointsvalue); 

  return (
    <div className=" bg-slate-500 w-full  border-2 rounded-xl p-4 flex justify-around">
      {DataPoints.map((datapoint) => (
        <ChartBar   key={datapoint.label} value={datapoint.value} maxValue={totalMax} label={datapoint.label}   />
      ))}

    
    </div>
  );
}

export default Chart;
