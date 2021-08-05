import React from 'react'
import './CardInformation.css'

export const CardInformation = (props) => {

    const {
        urlImg,
        text
    } = props

    console.log(props);

    return (
        <div className='card'>
            <img src={urlImg} alt='manImage' />
            <p>{text}</p>
        </div>
    )
}
