import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import UpdateTask from './components/UpdateTask'

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<ListTask/>}></Route>
      <Route path='/add' element={<AddTask/>}></Route>
      <Route path='/update/:id' element={<UpdateTask/>}></Route>
     </Routes>
    </>
  )
}

export default App
