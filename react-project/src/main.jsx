import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Example array + destructuring,
const pets = ["dog","cat","cow"]

// Array destructuring, access by key, if there is no key then it is "skipped"
const [first,second,third] = ["dog","cat","cow"]
const [f,,t] = ["dog","cat","cow"]
createRoot(document.getElementById('root')).render(
  <App />
)
