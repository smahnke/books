import { useState, useEffect } from "react"
import { getMyBooks, deleteBook } from "../services/bookService"
import { Book } from "../books/book"

export const MyBooks = () => {
    const [myBooks, setMyBooks] = useState([])

    const handleDelete = (id) => {
        const bookToDelete = myBooks.find(book => book.id === id)
        if (!bookToDelete || bookToDelete.ownerId !== 1) return // only allow deleting your own

        deleteBook(id).then(() => {
            setMyBooks(myBooks.filter(book => book.id !== id))
        })
    }

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
                    <Book key={bookObj.id} book={bookObj} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}