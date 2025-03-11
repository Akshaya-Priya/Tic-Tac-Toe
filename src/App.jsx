import { useState } from 'react'
import './App.css'

function Board(){
    const [symbol,setSymbol]=useState(Array(9).fill(null));
    const [win,setWin]=useState(null);
    let [turn,setTurn] = useState(1);

    function winner(board){
      const winning_combinations=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]];
      
      for(let [a,b,c] of winning_combinations){
        if(board[a] && board[a]===board[b] && board[a]===board[c]){
          return board[a];
        }
      }
      return null;
    }

    function handleClick(i){
        if(symbol[i] || win){
          alert("The Square is already filled");
          return;
        }
        let next=symbol.slice();
        next[i]= turn?'X':'O';
        setSymbol(next);
        setTurn((turn+1)%2);
        
        const x=winner(next);
        if(x) setWin(x);
    }

    
    return (
        <>
        <p>{win ? `Winner is ${win}` :`Current Player : ${ turn?'X':'O' }`}</p>
        <div className='board'>
            <div className="row1">
              <button className="square" onClick={()=>handleClick(0)}>{symbol[0]}</button>
              <button className="square" onClick={()=>handleClick(1)}>{symbol[1]}</button>
              <button className="square" onClick={()=>handleClick(2)}>{symbol[2]}</button>
            </div>
            <div className="row2">
              <button className="square" onClick={()=>handleClick(3)}>{symbol[3]}</button>
              <button className="square" onClick={()=>handleClick(4)}>{symbol[4]}</button>
              <button className="square" onClick={()=>handleClick(5)}>{symbol[5]}</button>
            </div>
            <div className="row3">
              <button className="square" onClick={()=>handleClick(6)}>{symbol[6]}</button>
              <button className="square" onClick={()=>handleClick(7)}>{symbol[7]}</button>
              <button className="square" onClick={()=>handleClick(8)}>{symbol[8]}</button>
            </div>
        </div>
        </>
    );
}

function App() {
  return (
    <>
    <h1>Tic Tak Toe</h1>
    <Board />
    </>
  )
}

export default App
