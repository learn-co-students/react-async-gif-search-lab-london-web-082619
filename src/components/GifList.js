import React, { Component } from 'react';

export class GifList extends Component {
    render() {
        return(
            <ul>
            {this.props.giphy.map((giph) => {
                return <li key={giph.id}><img src={giph.images.original.url} alt='gif' />
            {/* //needs return  */}
            </li>})}
            </ul>
        );


    }


}
export default GifList;