import React from 'react'

const Turn = (props) => {
    return (props.turn === 'W' ? <div>It's white's turn!</div> : <div>It's black's turn!</div>)

}

export default Turn;