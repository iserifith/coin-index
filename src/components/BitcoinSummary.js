import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

class BitcoinSummary extends Component {

	constructor(props){
		super(props)

		this.state = {
			stats: [],
			USD_MYR: 0,
		};
	}

	getStats(){
		axios.get('https://api.blockchain.info/stats?cors=true')
		.then((stats) => {
			this.setState({stats: stats.data})
		})
	}

	getMYR(){
		axios.get('http://free.currencyconverterapi.com/api/v5/convert?q=USD_MYR&compact=y')
		.then((response) => {
			this.setState({USD_MYR: response.data.USD_MYR.val})
		})
	}

	componentDidMount(){
		this.setState({stats: null})
		this.getMYR();
		this.getStats();

	}


	render() {
		return (
			<div className="BitcoinSummary">
			<hr/>
			<h3 className="is-size-4 has-text-weight-semibold has-text-centered">Block Summary</h3>
			<hr/>
			<div className="columns">
			<div className="column is-half">
			<div className="columns">
			<div className="column">
			Blocks Mined
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : this.state.stats['n_blocks_mined']}
			</div>
			</div>

			<div className="columns">
			<div className="column">
			Time Between Blocks
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : Math.round(this.state.stats['minutes_between_blocks']) + ' minutes' }
			</div>
			</div>

			<div className="columns">
			<div className="column">
			Bitcoin Mined
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : this.state.stats['n_btc_mined']}
			</div>
			</div>

			</div>
			<div className="column is-half">
			<div className="columns">
			<div className="column">
			Market Price (MYR)
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : parseFloat(this.state.stats['market_price_usd'] * (this.state.USD_MYR || 3.97)).toFixed(2) }
			</div>
			</div>

			<div className="columns">
			<div className="column">
			Bitcoin Trade Volume
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : this.state.stats['trade_volume_btc']}
			</div>
			</div>
			</div>
			</div>
			<hr/>
			<h3 className="is-size-4 has-text-weight-semibold has-text-centered">Transaction Summary Summary</h3>
			<hr/>

			<div className="container">
			<div className="columns">
			<div className="column">


			Total Transaction Fees (BTC)  
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : this.state.stats['total_fees_btc']}
			</div>


			</div>

			<div className="columns">
			<div className="column">


			Number of Transactions
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : this.state.stats['n_tx']}


			</div>
			</div>

			<div className="columns">
			<div className="column">


			Total Output Volume (BTC) 
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : this.state.stats['total_btc_sent']}


			</div>
			</div>

			<div className="columns">
			<div className="column">


			Estimated Transaction Volume (BTC)  
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : this.state.stats['estimated_btc_sent']}


			</div>
			</div>

			<div className="columns">
			<div className="column">


			Estimated Transaction Volume (MYR)  
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : parseFloat(this.state.stats['estimated_transaction_volume_usd'] * (this.state.USD_MYR || 3.97)).toFixed(2)}


			</div>
			</div>
			</div>

			<hr/>
			<h3 className="is-size-4 has-text-weight-semibold has-text-centered">Mining</h3>
			<hr/>

			<div className="columns">
			<div className="column">
			Total Miners Revenue (MYR)	
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : parseFloat(this.state.stats['miners_revenue_usd'] * (this.state.USD_MYR || 3.97)).toFixed(2)}
			</div>
			</div>

			<div className="columns">
			<div className="column">
			% Earned From Transaction Fees	
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : '0.97%'}
			</div>
			</div>

			<div className="columns">
			<div className="column">
			% Of Transaction Volume	
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : '1.92%'}
			</div>
			</div>


			<div className="columns">
			<div className="column">
			Cost per Transaction (MYR)	
			</div>
			<div className="column">

			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : parseFloat(68.21 * (this.state.USD_MYR || 3.97)).toFixed(2)}
			</div>
			</div>

			<div className="columns">
			<div className="column">
			Difficulty
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : this.state.stats['difficulty']}
			</div>
			</div>

			<div className="columns">
			<div className="column">
			Hash Rate
			</div>
			<div className="column">
			{this.state.stats === null ? <ReactLoading type={'cylon'} color={'ffffff'} height={25} width={30} /> : this.state.stats['hash_rate'] + ' GH/s'}
			</div>
			</div>

			</div>
			);
}
}

export default BitcoinSummary;
