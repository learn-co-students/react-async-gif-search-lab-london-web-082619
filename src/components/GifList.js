import React from 'react'

class GifList extends React.Component {

    generateGifListItems = (gifs) => {
        return gifs.map(gif => this.generateGifListItem(gif))
    }

    generateGifListItem = (gif) => {
        return <li> <img src={`${gif.images.original.url}`} alt={`This is a gif`}></img> </li>
    }

    render(){
        return(
            <ul>
                {this.generateGifListItems(this.props.gifs)}
            </ul>
        )
    }

    

}

export default GifList