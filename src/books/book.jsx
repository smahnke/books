import "./book.css"
import {Link} from "react-router-dom"

export const Book = ({ book }) => {
    const avgRating = book.ratings.length > 0
        ? (book.ratings.reduce((sum, r) => sum + r.rating, 0) / book.ratings.length).toFixed(1)
        : "No ratings"

    return (
        <Link to={`/book/${book.id}`} className="book-link">
            <article className="book-card">
                <img className="book-image" src={book.image} alt={book.title} />
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">{book.author}</p>
                <p className="rating">Rating: {avgRating}</p>
            </article>
        </Link>
    )
}