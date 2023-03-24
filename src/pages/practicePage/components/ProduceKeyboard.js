export default function ProduceKeyboard({code, setCode, index, setIndex, produce}) {

    const keyboardNums = ["7", "8", "9", "4", "5", "6", "3", "2", "1", "0"]
    
    const clearCode = () => {
        setCode("")
    }

    const addNumber = number => {
        if(code.length < 5){
            setCode(code + number)
        }
        return
    }

    const enterCode = () => {
        const produceImage = document.querySelector("#produce-image")
        if(code === produce[index].code){
            setIndex(index + 1)
            setCode("")
            return
        }
        produceImage.classList.toggle("wrong")
        produceImage.addEventListener("animationend", () => {
            produceImage.classList.remove("wrong");
          });
    }

    return (
        <div id="keyboard-container">
            <button className="btn" id="clear" onClick={clearCode}>Clear</button>
            {
                keyboardNums.map(number => {
                    return (
                        <button className="btn" id={`n${number}`} onClick={() => addNumber(number)} key={number}>{number}</button>
                    )
                })
            }
            <button className="btn" id="enter" onClick={enterCode}>Enter</button>
        </div>
    )
}