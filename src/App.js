import React, { Component } from 'react';
import Bitcoin from './components/bitcoin/Bitcoin';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      show_bitcoin: false,
      show_ethereum: false,
    };

    this.renderBitcoin = this.renderBitcoin.bind(this);
    this.renderEthereum = this.renderEthereum.bind(this);
    this.renderHome = this.renderHome.bind(this);
  }

  renderBitcoin(){
    this.renderHome();
    if (this.state.show_bitcoin) {
      this.setState({show_bitcoin: false})
    } else {
      this.setState({show_bitcoin: true})
    }
  }

  renderEthereum(){
    this.renderHome();
    if (this.state.show_ethereum) {
      this.setState({show_ethereum: false})
    } else {
      this.setState({show_ethereum: true})
    }
  }

  renderHome(){
    this.setState({
      show_bitcoin: false,
      show_ethereum: false
    })
  }

  render() {

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
