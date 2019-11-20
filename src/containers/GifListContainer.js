import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

// class GifListContainer extends React.Component{
//     state = {
//         gifs: []
//     }

//     fetchGifs(q='cat'){
//         fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g`)
//         .then(res => res.json())
//         .then(({data}) => this.setState({
//             gifs: data.map(gif => ({ url: gif.images.original.url }))
//         }))
//         // this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
//     }
//     componentDidMount(){
//         this.fetchGifs()
//     }

//     render() {
//         return (
//             <div>
//                 <GifSearch fetchGIFs={this.fetchGifs}/>
//                 <GifList gifs={this.state.gifs}/>
//             </div>
//         )
//     }
// }
class GifListContainer extends React.Component {

    state = {
      gifs: []
    }
  
    render() {
      return(
        <div>
          <GifSearch fetchGIFs={this.fetchGIFs} />
          <GifList gifs={this.state.gifs} />
        </div>
      )
    }
  
    fetchGIFs = (query = "dolphins") => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
          this.setState({ gifs: data.map( gif => ({ img: gif.images.original.url }) ) })
        })
    }
  
    componentDidMount() {
      this.fetchGIFs()
    }
  }
export default GifListContainer