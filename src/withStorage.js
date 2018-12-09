import React, { Component } from 'react'
import Find from 'i4k-find'
const {
    symbols: defaultSymbols,
    getUserSymbols,
    setUserSymbols } = Find

const withStorage = ExtendedComponent => (
    class extends Component {
	componentDidMount() {
	    this.setState({
		userSymbols: getUserSymbols(),
		defaultSymbols: defaultSymbols
	    })
	}

	saveUserSymbols = newSymbols => {
	    if (!newSymbols) return
	    setUserSymbols(newSymbols)
	    this.setState({
		userSymbols: newSymbols
	    })
	}

	addEngine = (symbol, engineId, url) => {
	    if(!symbol || !engineId || !url) return false
	    let newSymbols = this.state.userSymbols
	    newSymbols[symbol].engines[engineId] = url
	    this.saveUserSymbols(newSymbols)
	}

	deleteEngine = (symbol, engineId) => {
	    if(!symbol || !engineId) return false
	    let newSymbols = this.state.userSymbols
	    delete newSymbols[symbol].engines[engineId]
	    this.saveUserSymbols(newSymbols)
	}

	render() {
	    if(!this.state) return <></>
		return (
		    <ExtendedComponent
		      addEngine={this.addEngine}
		      deleteEngine={this.deleteEngine}
		      userSymbols={this.state.userSymbols}
		      defaultSymbols={this.state.defaultSymbols}/>
		)
	}
    }
)

export default withStorage;
