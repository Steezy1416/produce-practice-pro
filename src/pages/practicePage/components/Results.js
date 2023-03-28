export default function ResultsPage({ timer, wrongCount }) {
    const { wrongAnswers } = wrongCount
    const { minutes, seconds } = timer
    return (
        <section id="result-page-container">
            <h1 id="time-message">Your time was {minutes}:{seconds < 10 && 0}{seconds}</h1>

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
                                <td align="center" colSpan={2}>Total Wrong: {wrongAnswers.length}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    )
}