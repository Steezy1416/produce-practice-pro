import { Link, useLocation } from "react-router-dom"
import "./navbar.css"
import { useRef } from "react"

export default function Navbar() {

    const linkContainer = useRef(null)

    const location = useLocation()
    const path = location.pathname.split("/")[1]

    const handleBurgerClick = () => {
        switch (linkContainer.current.style.width) {
            case "50%": {
                linkContainer.current.style.width = "0rem"
                break
            }
            default: {
                linkContainer.current.style.width = "50%"
                break
            }
        }
    }

    const getClass = (linkPath) => {
        if (linkPath === path) {
            return "navLink activeNavLink"
        }
        else {
            return "navLink"
        }
    }

    return (
        <nav id="navbar">
            <div onClick={handleBurgerClick} id="hamburger-container">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <ul ref={linkContainer}
                className="nav-link-container">
                <Link to="/home" className="navLink">
                    Home
                </Link>
                <Link to="/practice" className={getClass("practice")}>
                    Practice
                </Link>
                <Link to="/flashcards" className={getClass("flashcards")}>
                    Flashcards
                </Link>
                <Link to="/search" className={getClass("search")}>
                    Search
                </Link>
            </ul>
        </nav>
    )
}