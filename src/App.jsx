
import ExpenseItem from './component/ExpenseItem'
import './App.css'

function App() {
  return (
    <>
      <h1>let's get started</h1>
      <h2><ExpenseItem date = {new Date(2026 , 1 , 1)}  location = "Banglore" Title = "insurense" Amount = {200}></ExpenseItem></h2>
      <h2><ExpenseItem date = {new Date(2025 , 2 , 10)}  location = "Indore" Title = "pen" Amount = {10}></ExpenseItem></h2>
      <h2><ExpenseItem date = {new Date(2024 , 3 , 11)}  location = "Delhi" Title = "book" Amount = {50}></ExpenseItem></h2>
      <h2><ExpenseItem date = {new Date(2023 , 4 , 12)}  location = "Bhopal" Title = "shoes" Amount = {150}></ExpenseItem></h2>
      
    </>
  )
}

export default App
