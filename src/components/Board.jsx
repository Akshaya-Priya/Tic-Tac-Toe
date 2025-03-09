function Square(){
    return(
        <>
        <button className="square">X</button>
        </>
    );
}

function Board({xplay}){
    return (
        <div className='board'>
            <div className="row1">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row2">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row3">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
}
export default Board;