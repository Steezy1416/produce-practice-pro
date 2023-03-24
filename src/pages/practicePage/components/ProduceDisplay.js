export default function ProduceDisplay({ code, index, produce }) {
    return (
        <div id="produce-display-card">
            <img id="produce-image" src={require(`../../../assets${produce[index].image}`)} />
            <div id="produce-info-container">
                <p id="produce-name">{produce[index].name}</p>
                <p id="produce-code">Code: <span className="highlightCodeColor">{code}</span></p>
            </div>
        </div>
    )
}