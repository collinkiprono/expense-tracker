import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  //   console.log(props.items[0].title);
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </div>
  );
};

export default Expenses;
