import React, { Component } from 'react';

export class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map(gif => {
          return <li key={gif.id}><img src={gif.images.original.url}/></li>
        })}
      </ul>
    );
  }
}

export default GifList;
