import "./NavBar.css"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
    
    return <ul className="navbar">
        <div className="nav-links">
            <li>
                <Link to='/'>All Books</Link>
            </li>
            <li className="nav-links">
                <Link to='/mybooks'>My Books</Link>
            </li>

            {localStorage.getItem("book_user") ? (
                <li className="navbar-item navbar-logout">
                    <Link
                        className="navbar-link"
                        to=""
                        onClick={() => {
                            localStorage.removeItem("book_user")
                            navigate("/", {replace: true})
                        }}
                    >
                        Logout
                    </Link>
                </li>
            ) : (
                ""
            )}
        </div>
    </ul>
}