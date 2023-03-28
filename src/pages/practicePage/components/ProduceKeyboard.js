import { Link } from "react-router-dom"

export default function ProduceKeyboard({ code, setCode, index, setIndex, produce, setFinished, setTimer, timer, wrongCount, setWrongCount }) {

    const { wrongGuesses } = wrongCount
    const keyboardNums = ["7", "8", "9", "4", "5", "6", "3", "2", "1", "0"]

    const clearCode = () => {
        setCode("")
    }

    const addNumber = number => {
        if (code.length < 5) {
            setCode(code + number)
            setTimer({ ...timer, timerStarted: true })
        }
    }

    const enterCode = () => {
        const produceImage = document.querySelector("#produce-image")
        if (code === produce[index].code && index === produce.length - 1) {
            setFinished(true)
            setTimer({ ...timer, started: false })
            return
        }
        if (code === produce[index].code) {
            setCode("")
            setIndex(index + 1)
            setWrongCount({ ...wrongCount, wrongGuesses: 0, skipped: false })
            produceImage.classList.toggle("correct")
            produceImage.addEventListener("animationend", () => {
                produceImage.classList.remove("correct");
            });
        }
        else {
            setCode("")
            setWrongCount({ ...wrongCount, wrongGuesses: wrongGuesses + 1 })
            produceImage.classList.toggle("wrong")
            produceImage.addEventListener("animationend", () => {
                produceImage.classList.remove("wrong");
            });
        }
    }

    return (
        <div id="keyboard-container">
            <Link to={"/"} className="btn" id="exit">Exit</Link>
            <button className="btn" id="clear" onClick={clearCode}>Clear</button>
            {
                keyboardNums.map(number => {
                    return (
                        <button
                            className="btn"
                            id={`n${number}`}
                            onClick={() => addNumber(number)}
                            key={number}
                        >
                            {number}
                        </button>
                    )
                })
            }
            <button className="btn" id="enter" onClick={enterCode}>Enter</button>
        </div>
    )
}