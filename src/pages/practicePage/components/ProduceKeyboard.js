import { Link } from "react-router-dom"

export default function ProduceKeyboard({ code, setCode, index, setIndex, produce, setFinished, setTimer, timer }) {

    const keyboardNums = ["7", "8", "9", "4", "5", "6", "3", "2", "1", "0"]

    const clearCode = () => {
        setCode("")
    }

    const addNumber = number => {
        if (code.length < 5) {
            setCode(code + number)
        }
    }

    const enterCode = () => {
        const produceImage = document.querySelector("#produce-image")
        if (code === produce[index].code && index === produce.length - 1) {
            setFinished(true)
            return
        }
        if (code === produce[index].code) {
            setIndex(index + 1)
            setCode("")
            produceImage.classList.toggle("correct")
            produceImage.addEventListener("animationend", () => {
                produceImage.classList.remove("correct");
            });
        }
        else {
            setCode("")
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