
import Expenses from './component/Expenses'

import './App.css'

function App() {
  let expenses = [  
    { id : 1,date : new Date(2026 ,1 ,6) , location : "banglore" , title : "insurence", amount : 20},
    {id : 2,date : new Date(2025 ,2 ,5) , location : "indore" , title : "insurence", amount : 320},
    {id : 3,date : new Date(2024 ,3 ,4) , location : "deelhi" , title : "insurence", amount : 200}
    ]
  
  return (
    <>
      <h1>let's get started</h1>
      <Expenses expenses = {expenses}></Expenses>
    </>
  )
}

export default App
