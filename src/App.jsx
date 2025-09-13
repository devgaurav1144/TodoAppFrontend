import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<h1>List Task</h1>}></Route>
      <Route path='/add' element={<h1>Add Task</h1>}></Route>
     </Routes>
    </>
  )
}

export default App
