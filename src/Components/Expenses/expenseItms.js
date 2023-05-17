import ExpenseDate from "./ExpenseDate";

function ExpenseItms(props) {
  const { title, amount, date } = props;

  return (
    <div>
      <div className=" bg-slate-800 flex justify-between m-2 p-4   rounded-lg text-center">
        <ExpenseDate date={date} />

        <h2 className=" p-2 bg-gray-600-400 font-bold text-white mt-4 text-xl text-center">
          {" "}
          {title}{" "}
        </h2>
        <h2 className="bg-stone-300 rounded w-24 h-10 font-bold  text-center pt-2 mt-4 ">
          {" "}
          ${amount}{" "}
        </h2>
      </div>
    </div>
  );
}

export default ExpenseItms;
