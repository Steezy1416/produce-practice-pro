import { useEffect } from "react"

export default function ProduceDisplay({ code, index, setIndex, produce, timer, setTimer, wrongCount, setWrongCount, setFinished }) {

    const { minutes, seconds, timerStarted } = timer
    const { wrongGuesses, wrongAnswers } = wrongCount

    useEffect(() => {
        let intervalId
        if (timerStarted) {
            intervalId = setInterval(() => {
                setTimer(prevTime => {
                    let newTime = { ...prevTime }
                    newTime.seconds = newTime.seconds + 1
                    if (newTime.seconds === 60) {
                        newTime.seconds = 0
                        newTime.minutes++
                    }
                    return newTime

                })
            }, 1000)
            return () => clearInterval(intervalId);
        }
    }, [timerStarted, setTimer])

    const skipCode = () => {
        setTimer(seconds + 30 < 60
            ? { ...timer, seconds: seconds + 30 }
            : { ...timer, minutes: minutes + 1, seconds: seconds + 30 - 60 }
        )
        setWrongCount({ wrongGuesses: 0, skipped: false, wrongAnswers: [...wrongAnswers, produce[index]] })
        if (index === produce.length - 1) {
            setFinished(true)
            setTimer({ ...timer, started: false })
            return
        }
        setIndex(index + 1)
    }

    return (
        <div id="produce-display-card">
            <img alt="" id="produce-image" src={require(`../../../assets${produce[index].image}`)} />
            <div id="produce-info-container">
                <div id="produce-info">
                    <p id="produce-name">{produce[index].name}</p>
                    <p id="produce-code">Code: <span className="highlightColor">{code}</span></p>
                </div>
                <div id="produce-info-functions">
                    <p id="produce-time">
                        Time: <span className="highlightColor">
                            {minutes}:{seconds < 10 && 0}{seconds}
                        </span>
                    </p>

                    {wrongGuesses >= 3 &&
                        <button onClick={skipCode} id="produce-skip">
                            Skip <i className="fa-solid fa-forward" />
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}