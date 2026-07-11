export const Book = ({book}) => {
    return (
        <div className="books-container">
            <div>
                <article className="book-card">
                    <h3>Book {book.id}</h3>
                    <p className="book-detail">
                        {book.title}
                        {book.author}
                    </p>
                </article>
            </div>
        </div>
    )
}