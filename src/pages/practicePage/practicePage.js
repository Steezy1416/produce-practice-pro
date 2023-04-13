import { useState } from "react";
import ProduceDisplay from "./components/ProduceDisplay";
import ProduceKeyboard from "./components/ProduceKeyboard";
import Results from "./components/Results";
import produce from "../../assets/produce";
import Navbar from "../../components/Navbar";
import "./styles.css"

export default function PracticePage() {

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
                        produce={produce}
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
                        produce={produce}
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