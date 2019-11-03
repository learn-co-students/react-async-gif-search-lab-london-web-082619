import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export class GifListContainer extends Component {

    state = {
        searchInput: "",
        searchResults: []
    };

    fetchdata = (searchInput) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(results => this.setState({ searchResults: results.data.slice(0, 3)}))
        .catch(console.error)
    };

    render() {
        return(
            <div>
                <GifList giphy={this.state.searchResults} />
                <GifSearch submitHandler={this.fetchdata} />
            </div>
        );
    }


}

export default GifListContainer;