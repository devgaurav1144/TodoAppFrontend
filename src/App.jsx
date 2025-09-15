import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AddTask from './components/AddTask'

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<h1>List Task</h1>}></Route>
      <Route path='/add' element={<AddTask/>}></Route>
     </Routes>
    </>
  )
}

export default App
