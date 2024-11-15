import './App.css'

let langauge = "Javascript"

function Header(){
  return (
    <header>
      <h1>!Doug's Famous Website!</h1>
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

  return (
    <div>
      <Header/>
      <Main activities={activityObjects} today={new Date().getFullYear()}/>
    </div>
  )
}

export default App
