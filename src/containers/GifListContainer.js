import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    state = {
        gifs: []
    }

    generateSearchURL = (searchQuery) => {
        const BASE_URL = 'https://api.giphy.com/v1/gifs'
        const API_KEY = 'dc6zaTOxFJmzC&rating=g'
        return `${BASE_URL}/search?q=${searchQuery}&api_key=${API_KEY}`
    }

    getGifs = (searchQuery) => {
        let url = this.generateSearchURL(searchQuery)
        fetch(url).then(res => res.json()).then(this.updateGifs)
    }

    updateGifs = (gifs) => {
        this.setState({
            gifs: gifs.data.slice(0,3)
        })
    }

    render(){
        return(
            <div>
                < GifSearch getGifs={this.getGifs}/>
                < GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}

export default GifListContainer