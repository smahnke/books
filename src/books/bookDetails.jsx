import { getBookById } from "../services/bookService"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import "./bookDetails.css"
import { RatingBar } from "../components/RatingBar"
import { createRating } from "../services/ratingService"

export const BookDetails = () => {
    const [book, setBook] = useState({})
    const [selectedRating, setSelectedRating] =useState("")
    const [allRatings, setAllRatings] = useState([])

    const {id} = useParams()

    const handleRating = () => {
        const newRating = {
            bookId: book.id,
            userId: 1,
            rating: selectedRating
        }

        createRating(newRating)
            .then(() => getBookById(id))
            .then((updatedBook) => {
                setBook(updatedBook)
                setSelectedRating("")
            })
    }

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
                        <p>Owner: {book.owner?.name}</p>
                    </div>

                    <div className="rating-select">
                        <RatingBar
                            selectedRating={selectedRating}
                            setSelectedRating={setSelectedRating}
                        />
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
        <div className="save-btn">
            <button onClick={handleRating}>
                Save
            </button>
        </div>
    </section>
}