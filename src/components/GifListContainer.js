import React, { Component } from 'react';
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchGiphs()
      }

    fetchGiphs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ilwC7Cu5L1dPWpWaMEpa3OJdTmh1C9rN&rating=g`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({ gifs: json.data.slice(0, 3)})
        }
            )
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchGiphs={this.fetchGiphs}/>
            </div>
        )
    }
}

export default GifListContainer;