import "./NavBar.css"
import {Link} from "react-router-dom"

export const NavBar = () => {
    return <ul className="navbar">
        <div className="nav-links">
            <li>
                <Link to='/'>All Books</Link>
            </li>
            <li className="nav-links">
                <Link to='/mybooks'>My Books</Link>
            </li>
        </div>
    </ul>
}