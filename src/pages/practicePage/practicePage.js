import { useState } from "react";
import ProduceDisplay from "./components/ProduceDisplay";
import ProduceKeyboard from "./components/ProduceKeyboard";
import Results from "./components/Results";
import produce from "../../assets/produce";
import "./styles.css"

export default function PracticePage() {

    const [finished, setFinished] = useState(false)
    const [code, setCode] = useState("")
    const [index, setIndex] = useState(0)
    const [timer, setTimer] = useState({ min: 0, sec: 0, started: false })
    const [wrongCount, setWrongCount] = useState({ count: 0, skipped: false, wrongAnswers: [] })

    return (
        <>
            {!finished &&
                <section id="practice-page-container">
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
                />
            }
        </>
    )
}