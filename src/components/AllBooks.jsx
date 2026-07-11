import {useEffect, useState} from "react"
import { getAllBooks } from "../services/bookService"
import { Book } from "../books/book"
import { SearchBar } from "./SearchBar"

export const AllBooks = () => {
    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm]= useState("")
    const [filteredBooks, setFilteredBooks] =useState([])

    useEffect(() => {
        getAllBooks().then((booksArray) => {
            setBooks(booksArray)
        })
    }, [])

    useEffect(() => {
        let filtered = books

        if (searchTerm !== "") {
            filtered = filtered.filter(book =>
                book.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        }

        setFilteredBooks(filtered)
    }, [books, searchTerm])

    return (
        <div className="app-container">
            <h1 className="page-title">BOOKS</h1>

                <div>
                    <h2 className="page-header">All Books</h2>

                    <div className="search-bar">
                        <SearchBar setSearchTerm={setSearchTerm}/>
                    </div>

                    <div className="book-grid">
                    {filteredBooks.map((bookObj) => (
                        <Book key={bookObj.id} book={bookObj} />
                        ))}
                    </div>
                </div>
        </div>
    )
}