import React, { Component } from 'react';
import Bitcoin from './components/Bitcoin';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      show_bitcoin: false
    };

    this.renderBitcoin = this.renderBitcoin.bind(this);
    this.renderHome = this.renderHome.bind(this);
  }

  renderBitcoin(){
    if (this.state.show_bitcoin) {
      this.setState({show_bitcoin: false})
    } else {
      this.setState({show_bitcoin: true})
    }
  }

  renderHome(){
    this.setState({show_bitcoin: false})
  }

  render() {


    const key = 'xyUGcPx8BjBCs3dxaoSTMvqy5ghG25';

    return (
     <div className="App section">

     <div className="columns">
     <div className="column is-3">
     <nav className="panel">
     <p className="panel-heading">Coin Index</p>
     <a className="panel-block">
     <button className="button is-dark is-outlined is-small" onClick={this.renderHome}>Home</button>
     </a>
     <a className="panel-block">
     <button className="button is-dark is-outlined is-small" onClick={this.renderBitcoin}>Bitcoin</button>
     </a>
     <a className="panel-block">
     <button className="button is-dark is-outlined is-small" onClick={this.renderBitcoin}>Ethereum</button>
     </a>
     <a className="panel-block">
     <button className="button is-dark is-outlined is-small" onClick={this.renderBitcoin}>Ripple</button>
     </a>
     <a className="panel-block">
     <button className="button is-dark is-outlined is-small" onClick={this.renderBitcoin}>Litecoin</button>
     </a>
     </nav>
     </div>
     <div className="column is-8">

     {
      this.state.show_bitcoin
      ?<Bitcoin></Bitcoin>
      :null
    }
    </div>

    </div>
    </div>

    );
  }
}

export default App;
