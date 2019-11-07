import React from 'react'

const GifList = ( props ) => {
    
    return (
        <ul>
            <li>
                <img src={props.gif.images.original.url}/>
            </li>
        </ul>
    )
}

export default GifList