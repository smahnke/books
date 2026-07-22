import "./book.css"
import { useState, useEffect } from "react"
import { addBook } from "../services/bookService"
import { useNavigate } from "react-router-dom"

export const AddForm = () => {
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        image: "",
    })
    const navigate = useNavigate()

    const loggedInUser = JSON.parse(
        localStorage.getItem("book_user")
    )
            
    const handleAdd = (event) => {
        event.preventDefault()

        const savedBook = {
            title: newBook.title,
            author: newBook.author,                
            image: newBook.image,
            ownerId: loggedInUser.id,
        }
        
        addBook(savedBook).then(() => {
            navigate("/mybooks")
        })
    }

    return (
        <form className="book-form">
            <h2 className="page-header">Add Book</h2>
            <fieldset>
                <div className="book-form input">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={newBook.title}
                        onChange={(event) => {
                            const copy = { ...newBook }
                            copy.title = event.target.value
                            setNewBook(copy)
                        }}
                        required
                        className=""/>
                </div>
            </fieldset>
            <fieldset>
                <div className="book-form input">
                    <label>Author:</label>
                    <input
                        type="text"
                        value={newBook.author}
                        onChange={(event) => {
                            const copy = { ...newBook }
                            copy.author = event.target.value
                            setNewBook(copy)
                        }}
                        required
                        className=""/>
                </div>
            </fieldset>
            <fieldset>
                <div className="book-form input">
                    <label>Image:</label>
                    <input
                        type="link"
                        value={newBook.image}
                        onChange={(event) => {
                            const copy = { ...newBook }
                            copy.image = event.target.value
                            setNewBook(copy)
                        }}
                        required
                        className=""/>
                </div>
            </fieldset>
            <fieldset>
                <button
                    type="submit"
                    onClick={handleAdd}
                >
                    Save Book
                </button>
            </fieldset>
        </form>
    )
}