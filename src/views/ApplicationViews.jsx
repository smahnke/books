import {useState, useEffect} from "react"
import { AllBooks } from "../components/AllBooks"
import { BookDetails } from "../books/bookDetails"
import { MyBooks } from "../components/MyBooks"
import { NavBar } from "../components/Nav/NavBar"
import { BookForm } from "../books/bookForm"
import { Route, Routes, Outlet } from "react-router-dom"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localBookUser = localStorage.getItem("book_user")
        const bookUserObject=JSON.parse(localBookUser)

        setCurrentUser(bookUserObject)
    }, [])

  return <>
    <Routes>
        <Route
            path="/"
            element={
                <>
                <NavBar/>
                <Outlet/>
                </>
            }
        >
        <Route index element={<AllBooks/>}>
            </Route>
                <Route path="book/:id" element={<BookDetails />} />
            <Route path="mybooks" element={<MyBooks/>}/>
            <Route path="/book/:id/edit" element={<BookForm />}/>
        </Route>
    </Routes>
    </>
}