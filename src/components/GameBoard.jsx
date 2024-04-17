import { useState } from "react"


export default function GameBoard({onButtonClick,board}){
     return <ol id="game-board">
        {board.map((row,rowIndex) => <li key={rowIndex}>
            <ol>    
                {row.map((col,cowIndex) => <li key={cowIndex}><button disabled={col ? true : false} onClick={() => onButtonClick(board,rowIndex,cowIndex)}>{col}</button></li>)}
            </ol>
        </li>)}
     </ol>
    
}