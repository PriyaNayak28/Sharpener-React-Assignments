import './Expense.css'
import ExpenseItem from './ExpenseItem'

export default function Expenses (props) {
    return (
        <>
        <div className="expenses">
           {
            
      props.expenses.map((expense , index)=> {
     return (
      <ExpenseItem 
      key = {expense.id}
     date =  {expense.date}
      location = {expense.location}
      title =  {expense.title}
      amount = {expense.amount}
     > 
    </ExpenseItem>)
        })
      } 
           
        </div>
        </>
    )
}

