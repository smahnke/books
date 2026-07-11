import "./book.css"

export const Book = ({ book }) => {
    return (
        <article className="book-card">
            <img
                className="book-image"
                src={book.image}
                alt={book.title}
                referrerPolicy="no-referrer"
            />

            <h2 className="book-title">{book.title}</h2>

            <p className="book-author">{book.author}</p>
        </article>
    )
}