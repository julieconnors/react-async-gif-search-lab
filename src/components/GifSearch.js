import React, { Component } from 'react';

class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({
            query: e.target.value
        })
    }

    onSubmit = (event) => {
        console.log(this.state.query)
        event.preventDefault()
        this.props.fetchGiphs(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input onChange={this.handleInput} type="text" value={this.state.query}/>
                <input type="submit" />
            </form>
        )
    }
}

export default GifSearch;


