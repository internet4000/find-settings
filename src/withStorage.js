import React, { Component } from 'react'
import Find from 'i4k-find'

const withStorage = ExtendedComponent => (
	class extends Component {
		componentDidMount() {
			const userSymbols = Find.getUserSymbols()
			this.setState({
				userSymbols,
				defaultSymbols: Find.symbols
			})
		}

		saveUserSymbols = newSymbols => {
			if (!newSymbols) return
			Find.setUserSymbols(newSymbols)
			this.setState({
				userSymbols: newSymbols
			})
		}

		addEngine = (symbol, engineId, url) => {
			if(!symbol || !engineId || !url) return false
			let newSymbols = this.state.userSymbols
			if(!newSymbols[symbol]) {
				newSymbols[symbol] = {
					engines: {}
				}
			}
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
