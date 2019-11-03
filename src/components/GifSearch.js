import React, {Component} from 'react';

export class GifSearch extends Component {

    state = {
        searchInput: ""
    }

    handleChange = e => {
        this.setState({searchInput: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.submitHandler(this.state.searchInput);
        this.setState({searchInput: ""});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                value={this.state.searchInput}
                onChange={this.handleChange}
                />
                <input type='submit' value='Submit'/>
            </form>
        );
    }



}

export default GifSearch;