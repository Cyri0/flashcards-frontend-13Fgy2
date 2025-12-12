import { useState } from "react"
import type { FlashCardType } from "./App"

const FlashCard = ({ answer, question, points }: FlashCardType) => {
    const [flipped, setFlipped] = useState(false)

    const bgColorCalc = () => {
        if(points > 0) return "var(--green)"
        if(points < 0) return "var(--red)"
        return "white"
    }

    return (
        <div className="flip-card" onClick={()=>setFlipped(true)}>
            <div className={"flip-card-inner" + (flipped ? " do-the-flip":"")}>
                <div className="flip-card-front"
                    style={{ background: bgColorCalc()}}
                >
                    {question}
                </div>
                <div className="flip-card-back">
                    {answer}
                </div>
            </div>
        </div>
    )
}

export default FlashCard