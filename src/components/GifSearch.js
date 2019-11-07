import React from 'react'

class GifSearch extends React.Component {

    render() {
        return (
            <form onChange={(e) => this.props.gifSearch(e.target.value)}>
                <input type="text" placeholder="Search Gif..."></input>
            </form>
        )
    }
}

export default GifSearch