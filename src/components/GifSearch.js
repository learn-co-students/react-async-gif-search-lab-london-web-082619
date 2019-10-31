import React, { Component } from 'react';

export class GifSearch extends Component {
  state = {
    searchTerm: ""
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }
}

export default GifSearch;
