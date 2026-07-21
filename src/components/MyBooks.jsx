import { useState, useEffect } from "react"
import { getMyBooks, deleteBook, addBook } from "../services/bookService"
import { Book } from "../books/book"
import { Link } from "react-router-dom"

export const MyBooks = () => {
    const [myBooks, setMyBooks] = useState([])

    const loggedInUser = JSON.parse(
        localStorage.getItem("book_user")
    )

    const handleDelete = (id) => {
        const bookToDelete = myBooks.find(book => book.id === id)
        if (!bookToDelete || bookToDelete.ownerId !== loggedInUser.id) return // only allow deleting your own

        deleteBook(id).then(() => {
            setMyBooks(myBooks.filter(book => book.id !== id))
        })
    }

    const handleAdd = () => {
        const newBook = {
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    image: book.image,
                    ownerId: loggedInUser.id,
                }
        
        addBook(newBook)
            .then((addedBook) => {
                setMyBooks(addedBook)
            })
    }

    useEffect(() => {
        getMyBooks(loggedInUser.id).then((myBooksArray) => {
            setMyBooks(myBooksArray)
        })
    }, [])

    return (
        <div className="app-container">
            <h2 className="page-header">My Books</h2>
            <div className="button-group">
                <Link to="/book/add" className="add-btn">
                    Add
                </Link>
            </div>
            <div className="book-grid">
                {myBooks.map((bookObj) => (
                    <Book key={bookObj.id} book={bookObj} onDelete={handleDelete} onEdit={true}/>
                ))}
            </div>
        </div>
    )
}