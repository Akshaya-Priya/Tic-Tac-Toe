import { useState } from 'react';

function Square({turn,setTurn}){
    const [Symbol,setSymbol]=useState('');
    function handleClick(){
        if(Symbol=='' && turn==1){
            setSymbol('X');
            setTurn(0);
        }
        else if(Symbol=='' && turn==0){
            setSymbol('O');
            setTurn(1);
        }
        else{
            alert("The Clicked Box is Already Set");
        }
    }
    return(
        <>
            <button className="square" onClick={handleClick}>{Symbol}</button>
        </>
    );
}

function Board({turn,setTurn}){
    let [matrix,setMatrix]=useState([null]);

    if(turn==1) turn=1;
    else turn=0;
    return (
        <div className='board'>
            <div className="row1">
                <Square turn={turn} setTurn={setTurn}/>
                <Square turn={turn} setTurn={setTurn}/>
                <Square turn={turn} setTurn={setTurn}/>
            </div>
            <div className="row2">
                <Square turn={turn} setTurn={setTurn}/>
                <Square turn={turn} setTurn={setTurn}/>
                <Square turn={turn} setTurn={setTurn}/>
            </div>
            <div className="row3">
                <Square turn={turn} setTurn={setTurn}/>
                <Square turn={turn} setTurn={setTurn}/>
                <Square turn={turn} setTurn={setTurn}/>
            </div>
        </div>
    );
}
export default Board;