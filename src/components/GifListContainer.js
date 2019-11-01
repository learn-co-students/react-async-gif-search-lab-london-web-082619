import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'


class GifListContainer extends React.Component {

    state = {
        searchTerm: "",
        gifs: []
    }

    searchTerm = this.state.searchTerm

    fetchGifs = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(json => this.setState({ gifs: json.data }))
    }


    searchGifs = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm
        })
        this.fetchGifs(searchTerm)
    }

    render() {
        return (
            <div className="gif-container">
                <GifSearch searchGifs={this.searchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount() {
        this.fetchGifs()
    }

}
export default GifListContainer