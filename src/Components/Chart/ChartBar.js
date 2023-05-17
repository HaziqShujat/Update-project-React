import React from "react";

function ChartBar(props) {
  // console.log(props.value)
  let BarFillHeight = "0%";
  if (props.maxValue > 0) {
    BarFillHeight = `${props.value}%`;
    // console.log(BarFillHeight);
  }

  return (
    <div className="h-auto flex  w-4 rounded-lg flex-col align-middle text-white">
      <div className="   border-4 rounded-lg border-l h-56 bg-white  flex flex-col justify-end">
        <div
          className=" bg-purple-900  rounded-lg  w-full md:transition-all"
          style={{ height: BarFillHeight }}
        ></div>{" "}
        {/* fill */}
      </div>
      <div className="align-middle font-semibold text-base text-center">
        {" "}
        {props.label}{" "}
      </div>
    </div>
  );
}

export default ChartBar;
