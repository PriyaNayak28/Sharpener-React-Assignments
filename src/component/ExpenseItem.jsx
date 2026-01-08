import './ExpenseItem.css'

function ExpenseItem () {
    let expenseDate = new Date(2026 , 0 , 10);
    let expenseLocation = 'Delhi';
    let expenseTitle = 'book';
    let expenseAmount = 10;
   return( 
   <>
    <div className='expense-item'>
    <div>{expenseDate.getDate()}</div>
    <div className='expense-item__location'>{expenseLocation}</div>
    <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
    </div>
    </div>
    </>
    )
}

export default ExpenseItem