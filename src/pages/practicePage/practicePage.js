import { useState } from "react";
import ProduceDisplay from "./components/ProduceDisplay";
import ProduceKeyboard from "./components/ProduceKeyboard";

export default function PracticePage(){

    const [code, setCode] = useState("")

    return (
        <>
            <ProduceDisplay code={code}/>
            <ProduceKeyboard code={code} setCode={setCode}/>
        </>
    )
}