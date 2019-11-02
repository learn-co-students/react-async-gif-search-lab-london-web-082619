import React from 'react'

class GifSearch extends React.Component{

    state = {
        searchQuery: ""
    }

    onChangeHandler = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
        console.log(this.state.searchQuery)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getGifs(this.state.searchQuery)
    }

    render(){
        return(
            <form onChange={this.onChangeHandler} onSubmit={this.handleSubmit}>
                <label>Enter a Search Term:</label>
                <input type="text" placeholder="Enter search here..." value={this.state.searchQuery} ></input>
                <input type="submit"></input>
            </form>
        )
    }

}

export default GifSearch