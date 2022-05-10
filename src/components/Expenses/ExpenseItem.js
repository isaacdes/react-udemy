import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2022, 4, 6);
  //   const expenseTtile = "Car Inusrance";
  //   const expenseAmount = 200;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount} </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
