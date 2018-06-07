import React, { Component } from 'react';
import BitcoinRaw from './BitcoinRaw';
import BitcoinCharts from './BitcoinCharts';
import BitcoinSummary from './BitcoinSummary';

class BitcoinStats extends Component {
	constructor(props){
		super(props)

		this.state = {
			showSummary: false,
			showRaw: false,
			showCharts: false,
			showActions: false
		}

		this.renderRaw = this.renderRaw.bind(this)
		this.renderSummary = this.renderSummary.bind(this)
		this.renderCharts = this.renderCharts.bind(this)

	}


	resetAll(){
		this.setState({
			showSummary: false,
			showRaw: false,
			showCharts: false,
			showActions: false
		})
	}

	renderRaw(){
		this.resetAll()
		this.setState({showRaw: true})
	}

	renderSummary(){
		this.resetAll()
		this.setState({showSummary: true})
	}

	renderCharts(){
		this.resetAll()
		this.setState({showCharts: true})
	}


	

	render() {

		return (
			<div className="BitcoinStats">

			<div className="field is-grouped">
			<div className="control">
			<button onClick={this.renderSummary} className="button is-dark is-outlined">Summary</button>
			</div>
			<div className="control">
			<button onClick={this.renderRaw} className="button is-dark is-outlined">Raw</button>
			</div>
			<div className="control">
			<button onClick={this.renderCharts} className="button is-dark is-outlined">Charts</button>
			</div>
			<div className="control">
			<button className="button is-dark is-outlined">Actions</button>
			</div>
			</div>

			{
				this.state.showSummary
				?<BitcoinSummary></BitcoinSummary>
				:null
			}

			{
				this.state.showRaw
				?<BitcoinRaw></BitcoinRaw>
				:null
			}

			{
				this.state.showCharts
				?<BitcoinCharts></BitcoinCharts>
				:null
			}

			</div>
			);
	}
}

export default BitcoinStats;
