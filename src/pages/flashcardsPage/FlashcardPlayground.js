import { useLocation } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useRef, useState } from "react"
import "./flashcardPlayground.css"

export default function FlashcardPlayground() {

    const location = useLocation()
    const { flashcardTitle, flashcardProduce } = location.state.card

    const flashcardContainer = useRef(null)

    const [index, setIndex] = useState(0)
    const [onName, setOnName] = useState(true)
    const [produce, setProduce] = useState(flashcardProduce)

    const shuffleProduce = () => {
        const shuffledProduce = [...produce]
        for (let i = shuffledProduce.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledProduce[i], shuffledProduce[j]] = [shuffledProduce[j], shuffledProduce[i]];
        }
        setProduce(shuffledProduce)
        setIndex(0)
    }

    const handleFlashcardFlip = () => {
        setOnName(!onName)
        flashcardContainer.current.classList.toggle("clicked-flashcard-container")
        flashcardContainer.current.addEventListener("animationend", () => {
            flashcardContainer.current.classList.remove("clicked-flashcard-container");
        });
    }

    const goBack = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const goForward = () => {
        if (index < produce.length - 1) {
            setIndex(index + 1)
        }
    }

    return (
        <section id="flashcard-playground-container">
            <Navbar />
            <div>
                <div ref={flashcardContainer} onClick={handleFlashcardFlip} id="main-flashcard">
                    <p>
                        {
                            onName
                                ? produce[index].name
                                : produce[index].code
                        }
                    </p>
                </div>
                <div id="flashcard-metadata">
                    <p id="main-flashcard-title">{flashcardTitle}</p>
                    <p id="main-flashcard-index"> {index + 1}/{produce.length}</p>
                </div>
            </div>

            <div id="flashcard-controls-container">
                <button
                    className="flashcardBtnControl"
                    onClick={shuffleProduce}>
                    <i className="fa-solid fa-shuffle"></i>
                </button>
                <button
                    className="flashcardBtnControl"
                    onClick={handleFlashcardFlip}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
                <button
                    className="flashcardBtnControl"
                    onClick={goBack}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <button
                    className="flashcardBtnControl"
                    onClick={goForward}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </section>
    )
}