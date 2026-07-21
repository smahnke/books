import "./book.css"
import { Link } from "react-router-dom"

export const Book = ({ book, onDelete, onEdit }) => {
    const avgRating = book.ratings.length > 0
        ? (book.ratings.reduce((sum, r) => sum + r.rating, 0) / book.ratings.length).toFixed(1)
        : "No ratings"

    let deleteButton = null
    if (onDelete !== undefined) {
        deleteButton = (
            <div className="button-group">
                <button
                    className="delete-btn"
                    onClick={(e) => {
                        e.preventDefault()
                        onDelete(book.id)
                    }}
                >
                    Delete
                </button>
            </div>
        )
    }

    let editButton = null
    if (onEdit !==undefined) {
        editButton = (
            <div className="button-group">
                <button className="edit-btn">
                    <Link to={`/book/${book.id}/edit`}>
                        Edit
                    </Link>
                </button>
            </div>
        )
    }

    return (
        <article className="book-card">
            <Link to={`/book/${book.id}`} className="book-link">
                <img className="book-image" src={book.image} alt={book.title} />
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">{book.author}</p>
                <p className="rating">Rating: {avgRating}</p>
            </Link>
            
            <div className="button-group">
                {editButton}
                {deleteButton}
            </div>
        </article>
    )
}