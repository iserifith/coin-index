import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

class BitcoinRaw extends Component {

	constructor(props){
		super(props)

		this.state = {
			stats: [],
			USD_MYR: null
		};
	}

	getStats(){
		axios.get('https://api.blockchain.info/stats?cors=true')
		.then((data) => {

			var modifiedData = data.data;

			modifiedData["market_price_usd"] = parseFloat(modifiedData["market_price_usd"] * (this.state.USD_MYR || 3.97)).toFixed(2);
			modifiedData["estimated_transaction_volume_usd"] = parseFloat(modifiedData["estimated_transaction_volume_usd"] * (this.state.USD_MYR || 3.97)).toFixed(2);
			modifiedData["miners_revenue_usd"] = parseFloat(modifiedData["miners_revenue_usd"] * (this.state.USD_MYR || 3.97)).toFixed(2);
			modifiedData["trade_volume_usd"] = parseFloat(modifiedData["trade_volume_usd"] * (this.state.USD_MYR || 3.97)).toFixed(2);

			const values = [];

			for (let value of Object.values(modifiedData)){
				values.push(value)
			}


			const stats = {
				"timestamp": values[0],
				"market_price_myr": values[1],
				"hash_rate": values[2],
				"total_fees_btc": values[3],
				"n_btc_mined": values[4],
				"n_tx": values[5],
				"n_blocks_mined": values[6],
				"minutes_between_blocks": values[7],
				"totalbc": values[8],
				"n_blocks_total": values[9],
				"estimated_transaction_volume_myr": values[10],
				"blocks_size": values[11],
				"miners_revenue_myr": values[12],
				"nextretarget": values[13],
				"difficulty": values[14],
				"estimated_btc_sent": values[15],
				"miners_revenue_btc": values[16],
				"total_btc_sent": values[17],
				"trade_volume_btc": values[18],
				"trade_volume_myr": values[19]
			}
			this.setState({stats: stats})

		})
	}

	getUSDMYR(){
		axios.get('http://free.currencyconverterapi.com/api/v5/convert?q=USD_MYR&compact=y')
		.then((response) => {
			this.setState({USD_MYR: response.data.USD_MYR.val})
		})


	}

	componentDidMount(){
	this.setState({stats: null})
	this.getUSDMYR();
	setTimeout(() => {
		this.getStats();
	}, 500)


}

render() {
	return (
		<div className="BitcoinRaw">
		{
			!this.state.stats
			?<ReactLoading type={'bars'} color={'ffffff'} height={100} width={100} />
			:<pre>{JSON.stringify(this.state.stats, null, 2)}</pre>
		}
		</div>
		);
}
}

export default BitcoinRaw;
