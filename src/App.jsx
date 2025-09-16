import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<ListTask/>}></Route>
      <Route path='/add' element={<AddTask/>}></Route>
     </Routes>
    </>
  )
}

export default App
