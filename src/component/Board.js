import React from 'react'

class Board extends React.Component {
    renderBoard = (piece, total) => {
        if (piece) {
            if (piece.side === "W")
                switch (piece.type) {
                    case "R":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9814;</div>
                    case "N":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9816;</div>
                    case "B":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9815;</div>
                    case "Q":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9813;</div>
                    case "K":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9812;</div>
                    case "P":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9817;</div>
                    default:
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9817;</div>

                } else {
                switch (piece.type) {
                    case "R":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9820;</div>
                    case "N":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9822;</div>
                    case "B":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9821;</div>
                    case "Q":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9819;</div>
                    case "K":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9818;</div>
                    case "P":
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9823;</div>
                    default:
                        return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}>&#9823;</div>

                }
            }
        } else {
            return <div onClick={()=> this.props.moveHandler(piece,total)} className={parseInt((total / 8) + total) % 2 === 0 ? "chessSquare" : "chessSquareColored"}></div>
        }
    }


    render() {
        return (
            <div className="board">
                {
                    this.props.board.map((piece, i) => {
                        return this.renderBoard(piece, i)

                    })
                }
            </div>
        )
    }
}

export default Board
//
// <span className="chessSquare">
//     {props.renderBoard(props.pos, props.i)}
// </span>