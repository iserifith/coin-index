import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import BitcoinStats from './BitcoinStats';

class Bitcoin extends Component {
	constructor(props){
		super(props)

		this.state = {
			data: [],
			USD_MYR: '',
			MYR_BTC: '',
			bitcoinInterval: '',

		};

		this.getBitcoin = this.getBitcoin.bind(this);
	}

	modifyData(){

	}

	getBitcoin(){
		axios.get('https://blockchain.info/ticker')
		.then((response) => {
			this.setState({data: response.data.USD})
			this.setMYRBTC(response.data.USD['15m']);
		})
	}

	getMYR(){
		axios.get('http://free.currencyconverterapi.com/api/v5/convert?q=USD_MYR&compact=y')
		.then((response) => {
			this.setState({USD_MYR: response.data.USD_MYR.val})
		})
	}

	setMYRBTC(USD_BTC){
		let MYR_BTC = USD_BTC * this.state.USD_MYR;
		this.setState({MYR_BTC: MYR_BTC});
	}

	componentDidMount(){
		this.getMYR();
		var bitcoinInterval = setInterval(this.getBitcoin, 2000);
		this.setState({bitcoinInterval: bitcoinInterval});
		this.setState({MYR_BTC: null});
	}


	componentWillUnmount(){
		clearInterval(this.state.bitcoinInterval)

	}


	render() {

		return (
			<div className="Bitcoin">
			<div className="columns">

			<div className="column">
			<p>MYR-BTC</p>

			{
				!this.state.MYR_BTC
				?<ReactLoading type={'cylon'} color={'ffffff'} height={23} width={30} />
				:parseFloat(this.state.MYR_BTC).toFixed(5)
			}
			</div>

			<div className="column">
			<p>MYR-USD</p>

			{
				!this.state.USD_MYR
				?<ReactLoading type={'cylon'} color={'ffffff'} height={23} width={30} />
				:parseFloat(this.state.USD_MYR).toFixed(2)
			}
			</div>

			

			</div>
			<BitcoinStats></BitcoinStats>
			</div>
			);
	}
}

export default Bitcoin;
