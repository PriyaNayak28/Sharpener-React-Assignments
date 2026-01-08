import './ExpenseItem.css'

function ExpenseItem () {
   return( 
   <>
    <div className='expense-item'>
    <div>10/01/2026</div>
    <div className='expense-item__location'>location - Delhi</div>
    <div className='expense-item__description'>
        <h2>book</h2>
        <div className='expense-item__price'>$10</div>
    </div>
    </div>
    </>
    )
}

export default ExpenseItem