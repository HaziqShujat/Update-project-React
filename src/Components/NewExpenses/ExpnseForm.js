import {  useState } from "react";

function ExpenseForm(props) {


  const [enteredtitle, setEnteredTitle] = useState(""); //entere data

  const [enteredamount, setEnteredAmount] = useState("");

  const [entereddate, setEntereddate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //set title or update value
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setEntereddate(event.target.value);
  };

  const generateid = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  const SubmitHandler = (event) => {
    event.preventDefault();

    const expensedata = {
      id: generateid(),
      title: enteredtitle,
      amount: enteredamount,
      date: entereddate,
    };
    localStorage.setItem("expensedata", JSON.stringify([expensedata]));
  
    let existingData = localStorage.getItem("storedata");
    // console.log(existingData);
    let dataArray = [];
    if (existingData) {
      dataArray = JSON.parse(existingData);
    }
    dataArray.push(expensedata);
    localStorage.setItem("storedata", JSON.stringify(dataArray));

    // function ExpenseListComponent() {

    // const [expenseData, setExpenseData] = useState([]);

    //   useEffect(() => {
    //     const existingData = localStorage.getItem("expensedata");
    //     if (existingData) {
    //       const parsedData = JSON.parse(existingData);
    //       setExpenseData(parsedData);
    //     }
    //   }, []);

    // localStorage.getItem("expensedata",JSON.parse (expensedata) );
    props.OnsaveDate(expensedata);
    setEnteredTitle("");
    setEnteredAmount("");
    setEntereddate("");
  };

  // const [myExpenseData, setMyExpenseData] = useState({
  //   title: '',
  //   amount: '',
  //   date: new Date(),
  // });

  // useEffect(() => {
  //   // Retrieve data from local storage on component mount
  //   const storedData = localStorage.getItem('myExpenseData');
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  //     setMyExpenseData(parsedData);
  //   }
  // }, []);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setMyExpenseData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSaveData = () => {
  //   // Save data to local storage
  //   localStorage.setItem('myExpenseData', JSON.stringify(myExpenseData));
  //   alert('Expense data saved successfully!');
  // };

  // const [myExpenseData, setMyExpenseData] = useState();

  // useEffect(() => {
  //   // Retrieve data from local storage on component mount
  //   const storedData = localStorage.getItem("myExpenseData");
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  //     setMyExpenseData(parsedData);
  //   }
  // }, []);

  // const handleSaveData = () => {
  //   // Save data to local storage
  //   localStorage.setItem("myExpenseData", JSON.stringify(myExpenseData));
  //   alert("Expense data saved successfully!");
  // };



  return (
    <div className="bg-purple-300  rounded-lg m-2  flex justify-center py-4">
      <div className=" max-w-7xl p-4 rounded-md bg-slate-600">
        <form className="flex flex-col gap-3"  onSubmit={SubmitHandler}>
          <div className=" grid grid-cols-2 gap-3 justify-center   ">
            <div className="flex gap-2  items-center">
              <label className=" font-bold text-2xl">Title</label>
              <input
                type="text"
                className="h-10 w-full pl-2 rounded-md"
                onChange={titleChangeHandler}
                value={enteredtitle} //value refresh after update
              ></input>
            </div>

            <div className="flex gap-2 items-center">
              <label className="font-semibol  font-bold text-2xl">Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                className=" h-10 px-3 w-full rounded-md"
                onChange={AmountChangeHandler}
                value={enteredamount} //value refresh after update
              ></input>
            </div>

            <div className="flex gap-2 items-center ">
              <label className="font-semibol font-bold text-2xl">Date</label>
              <input
                type="date"
                min="2020-01-01" // from min to max year
                max="2022-01-01"
                className="h-10  w-full rounded-md"
                onChange={DateChangeHandler} //
                value={entereddate} //value refresh after update
              ></input>
            </div>
          </div>

          <div className="flex justify-end gap-7">
          {  <button   type="button" onClick={props.aboutcancel} className="font-bold text-2xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring p-4 focus:ring-violet-300 text-white cursor-pointer rounded-xl ">Cancel</button>}
            <button
              type="submit"
              // onClick={expenseData}
              className="font-bold text-2xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring p-4 focus:ring-violet-300 text-white cursor-pointer rounded-xl "
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
