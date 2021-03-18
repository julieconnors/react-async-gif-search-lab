import React, { Component } from 'react';

class GifList extends Component {
    render() {
        console.log(this.props.gifs)
        
        const giphys = this.props.gifs.map(gif => (
            <li><img src={gif.images.original.url} alt="" /></li>
            ));
        return <ul className="ui cards" >{giphys}</ul>
    }
}

export default GifList;