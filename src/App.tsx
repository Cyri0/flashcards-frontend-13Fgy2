import { createContext, useEffect, useState } from "react"
import FlashCard from "./FlashCard"
import ProgressBar from "./ProgressBar"

export type FlashCardType = {
  question: string,
  answer: string,
  points: number
}

export const NextContext = createContext<{nextQuestion:()=>void}>({nextQuestion: ()=>{}})

function App() {
  const [cards, setCards] = useState<FlashCardType[]>([])
  const [cardIndex, setCardIndex] = useState(0)

  useEffect(()=>{
    fetch("cards.json")
    .then(response => response.json())
    .then(data => setCards(data))
  },[])
  
  return (
    <>
    <NextContext.Provider value={{nextQuestion: ()=>setCardIndex(prev => prev + 1)}}>
      {cards.length > 0 && cardIndex < cards.length && <FlashCard {...cards[cardIndex]} />}
    </NextContext.Provider>

    <ProgressBar current={cardIndex+1} max={cards.length} />
    </>
  )
}

export default App
