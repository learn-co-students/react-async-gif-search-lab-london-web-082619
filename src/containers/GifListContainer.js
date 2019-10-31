import React, { Component } from 'react';
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export class GifListContainer extends Component {
  state = {
    searchTerm: "",
    searchResults: []
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.searchResults} />
        <GifSearch handleSearch={this.handleSearch} />
      </div>
    );
  }

  handleSearch = searchTerm => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(gifs => this.setState({ searchResults: gifs.data.slice(0, 3)}))
      .catch(console.error);
  }
}

export default GifListContainer;
