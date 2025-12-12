import { useContext, useEffect, useState } from "react"
import { NextContext, type FlashCardType } from "./App"

const FlashCard = ({ answer, question, points }: FlashCardType) => {
    const [flipped, setFlipped] = useState(false)
    const {nextQuestion} = useContext(NextContext)

    const bgColorCalc = () => {
        if(points > 0) return "var(--green)"
        if(points < 0) return "var(--red)"
        return "white"
    }

    useEffect(()=>{
        setFlipped(false)
    },[question])

    return (
        <div className="flip-card" onClick={()=>setFlipped(true)}>
            <div className={"flip-card-inner" + (flipped ? " do-the-flip":"")}>
                <div className="flip-card-front"
                    style={{ background: bgColorCalc()}}
                >
                    <h2>{question}</h2>
                </div>
                <div className="flip-card-back">
                    <div style={{background: bgColorCalc()}}>{points}</div>
                    <h2>{answer}</h2>
                    <div className="buttonWrapper">
                        <button onClick={nextQuestion}>
                            <i className="fa-regular fa-circle-check"></i>
                        </button>
                        <button onClick={nextQuestion}>
                            <i className="fa-regular fa-circle-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashCard