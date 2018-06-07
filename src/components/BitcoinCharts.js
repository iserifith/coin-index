import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from 'axios';
import moment from 'moment';

class BitcoinCharts extends Component {
	constructor(props){
		super(props)

		this.state = {
			data: [],
			USD_MYR: '',
		};

	}

	getData(){
		axios.get('https://api.blockchain.info/charts/market-price?cors=true&format=json&lang=en')
		.then((res) => {

			var response = res.data.values;

			for (var i = response.length - 1; i >= 0; i--) {
				var unix = moment.unix(response[i].x).format("DD/MM");
				var myr_price = parseInt(parseFloat(response[i].y * this.state.USD_MYR).toFixed(2));
				response[i].x = unix;
				response[i].y = myr_price;
			}

			this.setState({data: response});
		});
	}

	getUSDMYR(){
		axios.get('http://free.currencyconverterapi.com/api/v5/convert?q=USD_MYR&compact=y?cors=true')
		.then((response) => {
			this.setState({USD_MYR: response.data.results.USD_MYR.val || 3.97})
		})
	}

	componentWillMount(){
	}

	componentDidMount(){

		this.getUSDMYR();
		this.getData();
	}

	render() {

		

		return (
			<div className="BitcoinCharts">

			<hr/>
			<p className="has-text-centered is-size-2">
			BTC Market Price
			</p>
			<hr/>

			<LineChart width={900} height={300} data={this.state.data}
			margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			<XAxis dataKey="x"/>
			<YAxis/>
			<CartesianGrid strokeDasharray="3 3"/>
			<Tooltip/>
			<Legend />
			<Line type="monotone" name="BTC_MYR" dataKey="y" stroke="#8884d8" activeDot={{r: 8}}/>
			</LineChart>

			</div>
			);
	}
}

export default BitcoinCharts;
