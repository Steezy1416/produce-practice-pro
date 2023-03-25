export default function ProduceDisplay({ code, index, produce, timer, setTimer }) {


    return (
        <div id="produce-display-card">
            <img id="produce-image" src={require(`../../../assets${produce[index].image}`)} />
            <div id="produce-info-container">
                <div id="produce-info">
                    <p id="produce-name">{produce[index].name}</p>
                    <p id="produce-code">Code: <span className="highlightColor">{code}</span></p>
                </div>
                <div id="produce-info-functions">
                    <p id="produce-time">Time: <span className="highlightColor">{timer.min}:{timer.sec}</span></p>
                    <p id="produce-skip">Skip</p>
                </div>
            </div>
        </div>
    )
}