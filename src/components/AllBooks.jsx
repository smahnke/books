import {useEffect, useState} from "react"
import { getAllBooks } from "../services/bookService"

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

                <div className="books-header">
                    <h2>All Books</h2>
                    <div className="books-container">
                        {books.map((book) => (
                            <li key={book.id}>{book.title}</li>
                        ))}
                    </div>
                </div>
        </div>
    )
}