import React, { Component } from 'react';

class AddEngine extends Component {
    constructor() {
	super()
	this.state = {
	    url: '',
	    id: ''
	}
    }

    handleChange = (event) => {
	event.preventDefault()
	const {name, value} = event.target
	this.setState({
	    [name]: value
	})
    }

    render() {
	if(!this.props || !this.state) return <div>Loading</div>
	const {symbol, onAdd } = this.props
	const {id, url} = this.state

	return (
	    <article className="Engine Engine--add">
	      <input
		placeholder="id"
		className="Engine-id"
		name="id"
		value={id}
		onChange={this.handleChange}/>
	      <input
		placeholder="url"
		className="Engine-url"
		name="url"
		value={url}
		onChange={this.handleChange}/>

	      <button onClick={() => onAdd(symbol, id, url)}>
		Add
	      </button>
	    </article>
	)
    }
}

export default AddEngine
