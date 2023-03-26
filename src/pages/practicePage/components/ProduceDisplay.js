import { useEffect } from "react"

export default function ProduceDisplay({ code, index, setIndex, produce, timer, setTimer, wrongCount, setWrongCount, setFinished }) {

    useEffect(() => {
        let intervalId
        if (timer.started) {
            intervalId = setInterval(() => {
                setTimer(prevTime => {
                    let newTime = { ...prevTime }
                    newTime.sec = newTime.sec + 1
                    if (newTime.sec === 60) {
                        newTime.sec = 0
                        newTime.min = newTime.min + 1
                    }
                    return newTime

                })
            }, 1000)
            return () => clearInterval(intervalId);
        }
    }, [timer, setTimer])

    const skipCode = () => {
        setTimer(timer.sec + 30 < 60
            ? { ...timer, sec: timer.sec + 30 }
            : { ...timer, min: timer.min + 1, sec: timer.sec + 30 - 60 })
        if (index === produce.length - 1) {
            setFinished(true)
            setTimer({ ...timer, started: false })
            return
        }
        setIndex(index + 1)
        setWrongCount({ count: 0, skipped: false })
    }

    return (
        <div id="produce-display-card">
            <img id="produce-image" src={require(`../../../assets${produce[index].image}`)} />
            <div id="produce-info-container">
                <div id="produce-info">
                    <p id="produce-name">{produce[index].name}</p>
                    <p id="produce-code">Code: <span className="highlightColor">{code}</span></p>
                </div>
                <div id="produce-info-functions">
                    <p id="produce-time">
                        Time: <span className="highlightColor">
                            {timer.min}:{timer.sec < 10 && 0}{timer.sec}
                        </span>
                    </p>

                    {wrongCount.count >= 3 &&
                        <button onClick={skipCode} id="produce-skip">
                            Skip <i className="fa-solid fa-forward" />
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}