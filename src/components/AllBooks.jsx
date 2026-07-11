import {useEffect, useState} from "react"
import { getAllBooks } from "../services/bookService"
import { Book } from "../books/book"

export const AllBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        getAllBooks().then((booksArray) => {
            setBooks(booksArray)
        })
    }, [])

    return (
        <div className="app-container">
            <h1 className="page-title">BOOKS</h1>

                <div>
                    <h2>All Books</h2>
                    <div className="book-grid">
                    {books.map((bookObj) => (
                        <Book key={bookObj.id} book={bookObj} />
                        ))}
                    </div>
                </div>
        </div>
    )
}