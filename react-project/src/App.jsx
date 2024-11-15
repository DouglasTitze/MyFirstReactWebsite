import './App.css'
import { useState, useReducer, useEffect } from 'react'

function Header({openStatus, changeStatus}){
  return (
    <header>
      <h1>!Doug's Famous Website!</h1>
      <button onClick={changeStatus}>{openStatus ? "Close" : "Open"} The Page?</button>
    </header>
  )
}

const activities = [
  "Hiking",
  "Working out",
  "Pickle ball"
]

const activityObjects = activities.map((food,i) => ({
  id: i,
  title: food
}))

function Main({activities,today}){
  return (
    <>
    <div>
      <h2>Welcome to the website</h2>
    </div>
    <main>
      <img src="https://github.com/douglastitze.png" height = {400} alt='A handsome man smiling wearing a suit and glasses with a red tie'></img>
      <p>These are some things I like to do:</p>
      <ul>
        {activities.map((food => (
          <li key = {food.id}>{food.title}</li>
          )))
        }
      </ul>
      <p><small>{today}</small></p>
    </main>
  </>
  )
}

function App() {
  // Avoid declaring status in components to avoid sync issues, instead pass the status as properties
  // const [status, setStatus] = useState(true);
  // Using reducer instead of useState we can inject what the toggle is supposed to do prior to passing it as a property
  const [status, toggle] = useReducer((status) => !status, true)

  // Runs anytime the status variable changes
  useEffect(() => {console.log(`The page status is ${status ? "open" : "closed"}.`)})
  // Am empty depenency array means it only logs this message on the first render
  // useEffect(() => {console.log(`The page status is ${status ? "open" : "closed"}.`)}, [])
  // To be more specific we can add 'status' which again makes it render everytime status updates
  // useEffect(() => {console.log(`The page status is ${status ? "open" : "closed"}.`)}, [status])

  // Move this button to header to show how to change state from a component
  // <button onClick={() => setStatus(!status)}>{status ? "Close" : "Open"} The Page?</button>
  return (
    <div>
      <h1>This page is currently {status ? "open" : "closed"}</h1>
      
      <Header openStatus = {status} changeStatus = {toggle}/>
      <Main activities={activityObjects} today={new Date().getFullYear()} openStatus = {status}/>
    </div>
  )
}

export default App
