import './ExpenseItem.css'

function ExpenseItem (props) {
    let months = ["jan", "feb" , "march", "april" , "may" , "june" , "july" , "aug" , "sept" , "oct" , "nov" , "dec"];
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    let date = props.date.getDate();

   return( 
   <>
    <div className='expense-item'>
    {/* <div>{props.date.toISOString()}</div> */}
    <div>
    <div>{month}</div>
    <div>{year}</div>
    <div>{date}</div>
    </div>
    <div className='expense-item__location'>{props.location}</div>
    <div className='expense-item__description'>
        <h2>{props.Title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
    </div>
    </div>
    </>
    )
}

export default ExpenseItem