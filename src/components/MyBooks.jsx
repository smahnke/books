import {useState, useEffect} from "react"
import { getMyBooks } from "../services/bookService"
import { Book } from "../books/book"

export const MyBooks = () => {
    const [myBooks, setMyBooks] = useState([])

    useEffect(() => {
        getMyBooks(1).then((myBooksArray) => {
            setMyBooks(myBooksArray)
        })
    }, [])

    return (
        <div className="app-container">
            <h2 className="page-header">My Books</h2>
            <div className="book-grid">
                {myBooks.map((bookObj) => (
                    <Book key={bookObj.id} book={bookObj} />
                ))}
            </div>
        </div>
    )
}
