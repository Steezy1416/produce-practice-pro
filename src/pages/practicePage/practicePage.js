import { useState } from "react";
import ProduceDisplay from "./components/ProduceDisplay";
import ProduceKeyboard from "./components/ProduceKeyboard";
import Results from "./components/Results";
import produce from "../../assets/produce";
import Navbar from "../../components/Navbar";
import "./styles.css"
import shuffleArray from "../../helper";

export default function PracticePage() {

    const [shuffledProduce, setShufffledProduce] = useState(() => shuffleArray(produce))

    const [finished, setFinished] = useState(false)
    const [code, setCode] = useState("")
    const [index, setIndex] = useState(0)
    const [timer, setTimer] = useState({ minutes: 0, seconds: 0, timerStarted: false })
    const [wrongCount, setWrongCount] = useState({ wrongGuesses: 0, skipped: false, wrongAnswers: [] })

    return (
        <>
            {!finished &&
                <section id="practice-page-container">
                    <Navbar />
                    <ProduceDisplay
                        code={code}
                        index={index}
                        setIndex={setIndex}
                        produce={shuffledProduce}
                        timer={timer}
                        setTimer={setTimer}
                        wrongCount={wrongCount}
                        setWrongCount={setWrongCount}
                        setFinished={setFinished}
                    />
                    <ProduceKeyboard
                        code={code}
                        setCode={setCode}
                        index={index}
                        setIndex={setIndex}
                        produce={shuffledProduce}
                        setFinished={setFinished}
                        setTimer={setTimer}
                        timer={timer}
                        wrongCount={wrongCount}
                        setWrongCount={setWrongCount}

                    />
                </section>
            }
            {finished &&
                <Results
                    timer={timer}
                    wrongCount={wrongCount}
                    setFinished={setFinished}
                    setIndex={setIndex}
                    setTimer={setTimer}
                    setWrongCount={setWrongCount}
                />
            }
        </>
    )
}