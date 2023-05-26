import React from 'react'

export const Item = (props) => {
    return(
        <div className='item'>
            <img src={props.imgURL} />
            <h4>{props.name}</h4>
            <p>{props.cost}</p>
        </div>
    )
}