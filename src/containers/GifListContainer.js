import React from 'react'
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends React.Component {
    state = {
        allGifs: []
    }
    
getSearchEnquiry = searchQuery => { 
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(allGifs => this.setState({ allGifs: allGifs.data }))
}


    render() {

        let firstThreeGifs = this.state.allGifs
        firstThreeGifs = firstThreeGifs.slice(0, 3)

        return(
            <div>
                <GifSearch gifSearch={this.getSearchEnquiry}/>
                
                {firstThreeGifs.map(gif => ( 
                    <GifList gif={gif}/>
                ))}
            </div>
        )
    }
}

export default GifListContainer