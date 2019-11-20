import React from 'react'

class GifSearch extends React.Component{
    state ={
        query: ''
    }
    // handleSubmit = e =>{
    //     e.preventDefault()

    //     console.log(this.state.query)
    //     this.props.fetchGIFs(this.state.query)
    // }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
      }

    // handleChange = event =>{
    //     this.setState({[event.target.name]: event.target.value})
    // }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                    {/* <input type='text' name='query' value={this.state.query}
                        onChange={this.handleChange} placeholder="search... "></input> */}
                
                </form>
            </div>
        )
    }
}
export default GifSearch