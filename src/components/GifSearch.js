import React from 'react'

class GifSearch extends React.Component {

    state = {
        text: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchGifs(this.state.text)

    }

    render() {
        return (
            <form
                className="searchForm"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    name="text"
                    placeholder="Search for a funny dog"
                    value={this.state.text}
                />
                <input type="submit"
                    value="Search Gifs" />
            </form>
        )

    }

}
export default GifSearch