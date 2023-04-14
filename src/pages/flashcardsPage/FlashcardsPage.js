import { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import "./flashcardsPage.css"
import produce from "../../assets/produce";

export default function FlashcardsPage() {

    const flashcards = JSON.parse(localStorage.getItem("flashcards")) || []

    const [cards, setCards] = useState(flashcards)
    const [showForm, setShowForm] = useState(false)
    const [formState, setFormState] = useState({ flashcardTitle: "", flashcardProduce: [] })

    return (
        <section id="flashcards-page-container">
            <Navbar />
            {
                !showForm
                    ? <div>
                        <div onClick={() => setShowForm(!showForm)} className="flashcard">
                            <p>Create New card</p>
                        </div>
                        {
                            cards.map(card => {
                                return (
                                    <div className="flashcard">
                                        <p>{card.flashcardTitle}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : <CreateFlashardForm formState={formState} setFormState={setFormState} flashcards={flashcards} />
            }
        </section>
    )
}

const CreateFlashardForm = ({ formState, setFormState, flashcards }) => {

    const flashcardForm = useRef(null)

    const handleTitleChange = (e) => {
        const flashcardTitle = e.target.value
        setFormState({
            ...formState,
            flashcardTitle
        })

    }

    const handleCheckboxChange = (e, singleProduce) => {
        const produceSelected = e.target.checked
        if (!produceSelected) {
            const updatedProduce = formState.flashcardProduce.filter(produce => produce !== singleProduce)
            setFormState({
                ...formState,
                flashcardProduce: updatedProduce
            })
            return
        }

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
    }

    return (
        <form ref={flashcardForm} onSubmit={handleFlashcardForm}>
            <label>
                Enter a title
                <input onChange={handleTitleChange} type="text" />
            </label>
            <label>Select produce</label>
            {
                produce.map(singleProduce => {
                    return (
                        <label key={singleProduce.code}>
                            {singleProduce.name}
                            <input onClick={(e) => handleCheckboxChange(e, singleProduce)} type="checkbox" />
                        </label>
                    )
                })
            }
            <input value="Create Flashcard" type="submit" />
        </form>
    )
}