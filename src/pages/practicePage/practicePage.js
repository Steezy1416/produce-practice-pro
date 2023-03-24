import { useState } from "react";
import ProduceDisplay from "./components/ProduceDisplay";
import ProduceKeyboard from "./components/ProduceKeyboard";
import produce from "../../assets/produce";
import "./styles.css"

export default function PracticePage() {

    const [code, setCode] = useState("")
    const [index, setIndex] = useState(0)

    return (
        <section id="practice-page-container">
            <ProduceDisplay
                code={code}
                index={index}
                produce={produce}
            />
            <ProduceKeyboard
                code={code}
                setCode={setCode}
                index={index}
                setIndex={setIndex}
                produce={produce}
            />
        </section>
    )
}