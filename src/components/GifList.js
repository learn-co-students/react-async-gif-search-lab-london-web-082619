import React from 'react'
import Gif from './Gif'

class GifList extends React.Component {

    render() {
        return (
            <div className="gif-list">  {this.props.gifs.map(gif => <Gif gif={gif} />)} </div>



        )
    }
}

export default GifList