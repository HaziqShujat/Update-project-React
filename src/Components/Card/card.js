import React from "react";
function Card(props) { //accept date so data is add in the card
  return <div className="bg-zinc-500 shadow-2xl p-2 rounded-xl m-2" >{props.children}</div>;
}

export default Card;
