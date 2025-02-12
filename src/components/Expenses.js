import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"; 

function Expenses(props) {
  return (
    <div className="expenses">
     
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} 
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </div>
  );
}

export default Expenses;
