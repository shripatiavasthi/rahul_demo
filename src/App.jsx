import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

   const About = () => {
    return (
      <div style={{background : 'blue'}}>
        <p>ABout US</p>
      </div>
    )
  }
  return (
    <Routes>
      <Route path='/home' Component={Home}/>
      <Route path="/about" Component={About} />
    </Routes>
  )
}

export default App
