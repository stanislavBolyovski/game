export default function GameOver({winning}){
    const handleRefresh = () => {
        window.location.reload();
      };
    
   
        
    
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winning == "Draw" ?<p>Its a draw!</p> : <p>Player {winning} won!</p>}
        <button onClick={handleRefresh}>Refresh</button>
    </div>
};