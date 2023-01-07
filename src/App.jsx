import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Home from './pages/Home'
import DateWidget from './pages/DateWidget'

function App() {
  return (
    <div className="App flex w-full min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="date-widget" element={ <DateWidget/> } />
      </Routes>
    </div>
  )
}

export default App
