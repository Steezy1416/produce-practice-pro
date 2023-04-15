import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import "./flashcardsPage.css"
import produce from "../../assets/produce";

export default function FlashcardsPage() {

    const userFlashcards = JSON.parse(localStorage.getItem("flashcards")) || []

    const [flashcards, setFlashcards] = useState(userFlashcards)
    const [showForm, setShowForm] = useState(false)
    const [formState, setFormState] = useState({ flashcardTitle: "", flashcardProduce: [] })

    const removeCard = (card) => {
        const updatedFlashcards = flashcards.filter(flashcard => flashcard !== card)
        setFlashcards(updatedFlashcards)
        localStorage.setItem("flashcards", JSON.stringify(updatedFlashcards))
    }

    return (
        <section id="flashcards-page-container">
            <Navbar />
            {
                !showForm
                    ? <div id="flashcard-container">
                        <div onClick={() => setShowForm(!showForm)} id="create-flashcard" className="flashcard">
                            <p>Create New Flashcard</p>
                        </div>
                        {
                            flashcards.map(card => {
                                return (
                                    <div key={card.flashcardTitle} className="flashcard">
                                        <div className="flashcard-btn-container">
                                            <button onClick={() => removeCard(card)}><i className="fa-solid fa-xmark"></i></button>
                                        </div>
                                        <p>{card.flashcardTitle}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : <CreateFlashardForm
                        formState={formState}
                        setFormState={setFormState}
                        flashcards={flashcards}
                        setShowForm={setShowForm}
                        setFlashcards={setFlashcards}
                    />
            }
        </section>
    )
}

const CreateFlashardForm = ({ formState, setFormState, flashcards, setShowForm, setFlashcards }) => {

    const flashcardForm = useRef(null)
    const createCardBtn = useRef(null)

    useEffect(() => {
        if (!formState.flashcardTitle || !formState.flashcardProduce.length) {
            createCardBtn.current.disabled = true
        }
        else {
            createCardBtn.current.disabled = false
        }

    }, [formState])

    const handleTitleChange = (e) => {
        const flashcardTitle = e.target.value
        setFormState({
            ...formState,
            flashcardTitle
        })

    }

    const handleCheckboxChange = (e, singleProduce) => {
        const produceSelected = e.target.checked
        const produceLabel = e.target.parentElement

        if (!produceSelected) {
            produceLabel.classList.remove("checked")
            const updatedProduce = formState.flashcardProduce.filter(produce => produce !== singleProduce)
            setFormState({
                ...formState,
                flashcardProduce: updatedProduce
            })
            return
        }

        produceLabel.classList.add("checked")

        setFormState({
            ...formState,
            flashcardProduce: [...formState.flashcardProduce, singleProduce]
        })

    }

    const handleFlashcardForm = (e) => {
        e.preventDefault()
        console.log(formState)
        flashcards = [...flashcards, formState]
        localStorage.setItem("flashcards", JSON.stringify(flashcards))
        setShowForm(false)
        setFlashcards(flashcards)
        setFormState({ flashcardTitle: "", flashcardProduce: [] })

    }


    return (
        <form ref={flashcardForm} onSubmit={handleFlashcardForm} id="flashcard-form">
            <div id="form-title-container">
                <label id="title-label">
                    Enter a title
                    <br />
                    <input
                        id="title-input"
                        maxLength="24"
                        autoComplete="off"
                        onChange={handleTitleChange}
                        type="text"
                    />
                </label>
            </div>

            <p id="produce-form-title">Select produce</p>

            <div id="produce-form-container">
                {
                    produce.map(singleProduce => {
                        return (
                            <label className="produce-label" key={singleProduce.code}>
                                {singleProduce.name}
                                <input
                                    className="produce-input"
                                    onClick={(e) => handleCheckboxChange(e, singleProduce)} type="checkbox"
                                />
                            </label>
                        )
                    })
                }
            </div>
            <input ref={createCardBtn} id="create-card-btn" value="Create Flashcard" type="submit" />
        </form>
    )
}