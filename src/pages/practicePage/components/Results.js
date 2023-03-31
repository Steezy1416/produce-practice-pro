export default function ResultsPage({ timer, wrongCount, setFinished, setIndex, setTimer, setWrongCount }) {
    const { wrongAnswers } = wrongCount
    const { minutes, seconds } = timer

    const playAgain = () => {
        setFinished(false)
        setIndex(0)
        setTimer({ minutes: 0, seconds: 0, timerStarted: false })
        setWrongCount({ wrongGuesses: 0, skipped: false, wrongAnswers: [] })
    }

    return (
        <section id="result-page-container">
            <h1 id="time-message">Your time was <span className="stat-highlight">{minutes}:{seconds < 10 && 0}{seconds}</span></h1>

            <div id="result-card">
                <p>Here's what you missed...</p>
                <div id="table-container">
                    <table id="result-table">
                        <thead>
                            <tr>
                                <th>Produce</th>
                                <th>Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wrongAnswers.map(wrongAnswer => {
                                    return (
                                        <tr key={wrongAnswer.name}>
                                            <td>{wrongAnswer.name}</td>
                                            <td className="code">{wrongAnswer.code}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td align="center" colSpan={2}>Total Wrong: <span className="stat-highlight">{wrongAnswers.length}</span></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <button id="play-again-btn" onClick={playAgain}>Play Again</button>
        </section>
    )
}