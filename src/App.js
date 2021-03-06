// import ExpenseItem from "./components/ExpenseItem";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import react, { useState } from "react";

const DUMPY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMPY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("In APP.js");
    console.log(expense);

    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
    console.log(expenses);
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  //jsx
  // return react.createElement(
  //   "div",
  //   {},
  //   react.createElement("h2", {}, "Lets get started!"),
  //   react.createElement(Expenses, { items: expenses })
  // );
};

export default App;
