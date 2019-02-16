import React from 'react';

const AvailableMoves = (props)=> {
    return(
        <div style={{display:'inline-block'}}>
            <ul style={{listStyle:'none'}}>
            {props.availableMoves.map(position =>{
                return <li >{position.src} {position.dst}</li>
            })
            }
            </ul>
        </div>
    )
}

export default AvailableMoves;