export default function ProduceKeyboard({code, setCode}) {

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

    return (
        <div id="keyboard-container">
            <button> </button>
            <button onClick={clearCode}>Clear</button>
            {
                keyboardNums.map(number => {
                    return (
                        <button onClick={() => addNumber(number)} key={number}>{number}</button>
                    )
                })
            }
            <button>Enter</button>
        </div>
    )
}