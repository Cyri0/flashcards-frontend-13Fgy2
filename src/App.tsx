import { useEffect, useState } from "react"

type FlashCardType = {
  question: string,
  answer: string,
  points: number
}

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
      {cards.length > 0 && cards[cardIndex].question}
    </>
  )
}

export default App
