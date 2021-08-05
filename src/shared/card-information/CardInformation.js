import React from 'react'
import './CardInformation.css'

export const CardInformation = (props) => {

    const {
        urlImg,
        textTitle,
        textBody
    } = props

    return (
        <div className='card' >
            <img src={urlImg} alt='manImage' className='animate__animated animate__pulse animate__infinite' />
            <h1>{textTitle}</h1>
            <p className='animate__animated animate__flipInY animate__slower'>{textBody}</p>
        </div>
    )
}
