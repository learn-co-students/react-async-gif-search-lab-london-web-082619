import React from 'react'

class Gif extends React.Component {

    render() {
        const gif = this.props.gif

        return (
            <img className="gif" src={gif.images.original.url} alt={gif.slug} />
        )
    }

}

export default Gif