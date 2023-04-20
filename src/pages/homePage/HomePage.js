import { Link } from "react-router-dom"
import puns from "./puns"
import "./homePage.css"
import { useEffect, useRef, useState } from "react"
import shuffleArray from "../../helper"

export default function HomePage() {

    const [randomPun, setRandomPun] = useState({ question: "", answer: "" })

    useEffect(() => {
        const shuffledPuns = shuffleArray(puns)
        const [{ question, answer }] = shuffledPuns
        setRandomPun({ question, answer })
    }, [])

    const [onQuestion, setOnQuestion] = useState(true)
    const punContainer = useRef(null)

    const handleCardClick = () => {
        setOnQuestion(!onQuestion)
        punContainer.current.classList.toggle("clicked-pun-container")
        punContainer.current.addEventListener("animationend", () => {
            punContainer.current.classList.remove("clicked-pun-container");
        });

    }

    return (
        <section id="home-page-container">
            <div ref={punContainer} onClick={handleCardClick} id="pun-container">
                <p id="pun-text">
                    {onQuestion
                        ? randomPun.question
                        : randomPun.answer
                    }
                </p>
            </div>
            <div id="link-box-container">
                <Link className="homePageLink practiceLink" to={"/practice"}>Practice</Link>
                <Link className="homePageLink flashcardLink" to={"/flashcards"}>Flashcards</Link>
                <Link className="homePageLink searchLink" to={"/search"}>Search</Link>
            </div>
        </section>
    )
}