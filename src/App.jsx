import { AllBooks } from "./components/AllBooks"
import "./App.css"
import {Routes, Outlet, Route} from "react-router-dom"
import { NavBar } from "./components/Nav/NavBar"
import { MyBooks } from "./components/MyBooks"

export const App = () => {
  return (
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
        <Route path="mybooks" element={<MyBooks/>}/>
      </Route>
    </Routes>
  )
}
