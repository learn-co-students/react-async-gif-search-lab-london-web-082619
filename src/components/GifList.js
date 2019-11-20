import React from 'react'
// class GifList extends React.Component{
//     render() {
        
//         return (
//             <div>
//                 <ul>
//                     {/* {this.props.gifs.map(gif => <li key= {gif.url}><img src={gif.url} alt={gif.url}></img></li>)} */}
//                     {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}

//                 </ul>
//             </div>
//         )
//     }
// }

const GifList = props => {
    console.log(props);
    return (
      <div>
          {props.gifs.map(gif => <img key={gif.img} src={gif.img} alt="gif"/>)}
      </div>
    )
  }
export default GifList