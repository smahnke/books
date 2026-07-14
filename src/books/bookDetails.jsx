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
                        src={book?.image}
                        alt={book?.title}
                    />

                    <h2>{book?.title}</h2>
                    <p>{book?.author}</p>
                    <p>{book.owner?.name}</p>
                </div>

                <div className="book-right">
                    <div className="rating-box">
                        {book.ratings?.map(rating => (
                        <p key={rating.id}>
                        ⭐ {rating.value}
                        </p>
                        ))}
                    </div>
                </div>
            </div>
    </section>
}