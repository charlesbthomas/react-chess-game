import React from 'react'
import Board from './Board'
import Turn from './Turn'
import AvailableMoves from './AvailableMoves'

class Game extends React.Component {
    state = {
        position: {
            turn: "W",
            castlingFlags: {
                W: {
                    K: true,
                    Q: true
                },
                B: {
                    K: true,
                    Q: true
                }
            },
            lastPawnMoveColumn: null,
            check: false,
            fullMoveNumber: 1,
            halfMoveClock: 0,
            board: [
                {
                    "type": "R",
                    "side": "W"
                },
                {
                    "type": "N",
                    "side": "W"
                },
                {
                    "type": "B",
                    "side": "W"
                },
                {
                    "type": "Q",
                    "side": "W"
                },
                {
                    "type": "K",
                    "side": "W"
                },
                {
                    "type": "B",
                    "side": "W"
                },
                {
                    "type": "N",
                    "side": "W"
                },
                {
                    "type": "R",
                    "side": "W"
                },
                {
                    "type": "P",
                    "side": "W"
                },
                {
                    "type": "P",
                    "side": "W"
                },
                {
                    "type": "P",
                    "side": "W"
                },
                {
                    "type": "P",
                    "side": "W"
                },
                {
                    "type": "P",
                    "side": "W"
                },
                {
                    "type": "P",
                    "side": "W"
                },
                {
                    "type": "P",
                    "side": "W"
                },
                {
                    "type": "P",
                    "side": "W"
                },
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                {
                    "type": "P",
                    "side": "B"
                },
                {
                    "type": "P",
                    "side": "B"
                },
                {
                    "type": "P",
                    "side": "B"
                },
                {
                    "type": "P",
                    "side": "B"
                },
                {
                    "type": "P",
                    "side": "B"
                },
                {
                    "type": "P",
                    "side": "B"
                },
                {
                    "type": "P",
                    "side": "B"
                },
                {
                    "type": "P",
                    "side": "B"
                },
                {
                    "type": "R",
                    "side": "B"
                },
                {
                    "type": "N",
                    "side": "B"
                },
                {
                    "type": "B",
                    "side": "B"
                },
                {
                    "type": "Q",
                    "side": "B"
                },
                {
                    "type": "K",
                    "side": "B"
                },
                {
                    "type": "B",
                    "side": "B"
                },
                {
                    "type": "N",
                    "side": "B"
                },
                {
                    "type": "R",
                    "side": "B"
                }
            ]
        },
        availableMoves:[]
    }
    /*right now hardcoded values to watch board update with moves*/
    moveHandler = (piece, total) => {
        let chessRules = this.props.chessRules
        console.log(piece,total)
        let availMoves = this.state.availableMoves
        let movesAllowed = availMoves.filter(moves => {
            if(moves.dst === total){
                return moves
            }
        })
        console.log(movesAllowed)

        let movesTranslated = chessRules.moveToPgn(this.state.position, movesAllowed[0])
        let move = chessRules.pgnToMove(this.state.position, movesTranslated);
        let updatePosition = chessRules.applyMove(this.state.position, move)
        let updatedPosition = this.state.position
        updatedPosition.board = updatePosition.board
        this.setState({
            position:updatedPosition
        },()=>{
            console.log(this.state.position.board)
        })


        /*turn toggler for white + back*/
        this.turnHandler();
    }

    turnHandler = () =>{
        let position = {...this.state.position}
        if(position.turn === "W") {
            position.turn = "B"
        }else{
            position.turn = "W"
        }
        this.setState({position:position})
        this.availableMoveHandler(position);
    }

    availableMoveHandler = (position) => {
        let availableMoves
        if(position !== undefined) {
            availableMoves = this.props.chessRules.getAvailableMoves(position)
        }else{
            availableMoves = this.props.chessRules.getAvailableMoves(this.state.position)
        }
        this.setState({
            availableMoves:availableMoves
        })
    }

    componentWillMount() {
        console.log(this.state.position)
        this.availableMoveHandler();


    }

    render() {
        const {position, availableMoves} = this.state;
        return (
            <div>
                <Turn
                    turn={position.turn}/>
                <Board
                    board={position.board}
                    moveHandler={this.moveHandler}
                />
                <AvailableMoves
                    availableMoves={availableMoves}/>
            </div>
        )
    }
}

export default Game
//
// <div className="board">
//     {position.board.map((pos, i) => {
//         return <Board
//             pos={pos}
//             i={i}
//             renderBoard={this.renderBoard}
//         />
//     })}
// </div>