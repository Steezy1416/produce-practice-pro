import { Link } from "react-router-dom"
import puns from "./puns"
import "./homePage.css"
import { useRef, useState } from "react"

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledPuns = shuffleArray(puns)

const [{ question, answer }] = shuffledPuns

export default function HomePage() {

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
                        ? question
                        : answer
                    }
                </p>
            </div>
            <div id="link-box-container">
                <Link className="homePageLink practiceLink" to={"/practice"}>Practice</Link>
                <Link className="homePageLink flashcardLink" to={"/flashcards"}>Flashcards</Link>
                <Link className="homePageLink searchLink" to={"/"}>Search</Link>
                <Link className="homePageLink customPracticeLink" to={"/"}>Custom Practice</Link>
            </div>
        </section>
    )
}