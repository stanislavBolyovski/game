import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import { WINNING_COMBINATIONS } from "../winning"
import GameOver from "./components/GameOver"
const initialBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
  ]

function App() {
  let winning = null;
  const [array,setNewArray] = useState(initialBoard)
  const [turn,setTurn] = useState("")
  const [history,setHystory] = useState([])
  
  for (const combination of WINNING_COMBINATIONS) {
   const firstSquareSymbol = array[combination[0].row][combination[0].column]
   const secondSquareSymbol = array[combination[1].row][combination[1].column]
   const thirdSquareSymbol = array[combination[2].row][combination[2].column]
   if (firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && secondSquareSymbol==thirdSquareSymbol){
    winning = firstSquareSymbol
   }  
  }
  if(!array[0].includes(null) && !array[1].includes(null) && !array[2].includes(null) && !winning){
    winning = "Draw"
  }
  function buttonHandler(initialBoard,rowIndex,cowIndex){
    
    setTurn((currentTurn) => {
      const newArray = [...array];
     if(currentTurn === "X" ) {
      currentTurn = "O"
      newArray[rowIndex][cowIndex] = "O"
      
     }else
      {
        currentTurn = "X"
        newArray[rowIndex][cowIndex] = "X"
      
      } 
      setNewArray(newArray);
      setHystory([...history,<li key={{rowIndex,cowIndex}}>{currentTurn} selected {rowIndex},{cowIndex}</li>])
      return currentTurn
    })
    
}
  return (
   <main>
    <div id="game-container">
      <ol id='players'>
      <Player name="Player 1" symbol="X" />
      <Player name="Player 2" symbol="O" />
      </ol>
      {winning && <GameOver winning={winning}/> }
      <GameBoard board={array} onButtonClick={buttonHandler} />
      <ol>
        {history}
      </ol>
    </div>
   
   </main>
  )
}

export default App
