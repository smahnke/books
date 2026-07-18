import "./book.css"
import { useState, useEffect } from "react"
import { getBookById } from "../services/bookService"
import { updateBook } from "../services/bookService"
import { useNavigate, useParams } from "react-router-dom"

export const BookForm = ({currentBook}) => {
    const [book, setBook] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getBookById(id).then((data) => {
            const bookObj = data[0]
            setBook(bookObj)
        })
    }, [currentBook])

    const handleSave = (event) => {
        event.preventDefault()
        
        const editedBook = {
            id: book.id,
            image: book.image,
            title: book.title,
            author: book.author
        }

        updateBook(editedBook).then(()=> {
            navigate(`/book/${id}`)
        })
    }

    return (
        <form className="book-form">
            <h2>Edit Book</h2>
            <fieldset>
                <div className="book-form input">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={book.title}
                        onChange ={(event) => {
                            const copy = {...book}
                            copy.title=event.target.value
                            setBook(copy)
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
                        value={book.author}
                        onChange ={(event) => {
                            const copy = {...book}
                            copy.author=event.target.value
                            setBook(copy)
                        }}
                        required
                        className=""/>
                </div>
            </fieldset>

            <fieldset>
                <div className="button-group">
                    <button type="submit" className="button" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </fieldset>
        </form>
    )
}