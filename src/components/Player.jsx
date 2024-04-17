import { useState } from "react";

export default function Player({name,symbol}){

  const [isEditing,setIsEditing] = useState(false)
  const [playerName,setplayerName] = useState(name)

  let buttonName = "Edit"

  let editedPlayerName = <span className="player-name">{playerName}</span>

  if (isEditing){
    buttonName = "Save"
    editedPlayerName = <input required onChange={typeHandler} value={playerName}/>
  }

  function editHandler(){
    setIsEditing((edit) => !edit)
  }

  function typeHandler(event){
    setplayerName(event.target.value)
  }
    return    <li>
    <span className="player">
      {editedPlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={editHandler}>{buttonName}</button>
  </li>
}