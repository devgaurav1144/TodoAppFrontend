import { Link } from 'react-router-dom'
import "../styles/navbar.css"
function Navbar(){
    return(
        <nav className='navbar-items'>
           <div className="logo"><h1>TODO APP</h1></div> 
            <ul className='nav-links'>
                <li><Link to="/">List</Link></li>
                <li><Link to="/add">Add Task</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar