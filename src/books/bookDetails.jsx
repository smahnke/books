import { getBookById } from "../services/bookService"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import "./bookDetails.css"

export const BookDetails = () => {
    const [book, setBook] = useState({})

    const {id} = useParams()

    useEffect(() => {
        getBookById(id).then(setBook)
        }, [id])

    return <section className="book-detail-page">
        <h2 className="page-header">Book Details</h2>
            <div className="book-detail-card">
                <div className="book-left">
                    <img
                        className="detail-image"
                        src={book.image}
                        alt={book.title}
                    />

                    <div className="book-meta">
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Owner: {book.user?.name}</p>
                    </div>
                </div>

                <div className="book-right">
                    <div className="rating-box">
                        {book.ratings?.map(rating => (
                            <p key={rating.id}>
                                ⭐ {rating.rating}/5
                                - {rating.user?.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
    </section>
}