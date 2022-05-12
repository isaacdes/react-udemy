import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  // console.log(props.item)
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((x) => (
        <ExpenseItem
          key={x.id}
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
