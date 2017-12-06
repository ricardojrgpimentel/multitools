import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cryptoContentActions from '../../actions/cryptoContentActions'
import { Link } from 'react-router-dom'

class Coin extends React.Component{

  componentWillMount(){
    this.props.actions.fetchCoinSnapshot(this.props.match.params.coin)
    !this.props.coinList && this.props.actions.fetchcoinList()
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.coin !== nextProps.match.params.coin){
      this.props.actions.fetchCoinSnapshot(nextProps.match.params.coin)
    }
  }

  handleResponse(){
    let coin = this.props.coinList.Data[this.props.match.params.coin]
    let snapshot = this.props.coinSnapshot[`${this.props.match.params.coin}Snapshot`]
    return(
      <div className='coin-info'>
        <div className="row row-no-padding row-col-no-padding" style={{width: '100%'}}>
          <div className='col-md-4'>
            <div className='box-info'>
              <div className='box-header'>
                <h2 className='header'>Logo</h2>
              </div>
              <div className='box-body'>
                <img className='coin-logo-2x' src={`https://cryptocompare.com${coin.ImageUrl}`} alt={coin.CoinName}/>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='row row-no-padding row-col-no-padding main-content-sides'>
              <div className='col-12'>
                <div className='box-info'>
                  <div className='box-header'>
                    <h2 className='header'>Coin Info</h2>
                  </div>
                  <div className='box-body'>
                    <p><strong>Name:</strong> {coin.FullName}</p>
                    <p><strong>Algorithm:</strong> {coin.Algorithm}</p>
                    <p><strong>Proof Type:</strong> {coin.ProofType}</p>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='box-info'>
                  <div className='box-header'>
                    <h2 className='header'>Coin Value</h2>
                  </div>
                  <div className='box-body'>
                    <p><strong>Value:</strong> {snapshot.DISPLAY[this.props.match.params.coin].EUR.PRICE}</p>
                    <p><strong>Supply:</strong> {snapshot.DISPLAY[this.props.match.params.coin].EUR.SUPPLY}</p>
                    <p><strong>Market Cap:</strong> {snapshot.DISPLAY[this.props.match.params.coin].EUR.MKTCAP}</p>
                    <p><strong>Last 24H:</strong> {snapshot.DISPLAY[this.props.match.params.coin].EUR.CHANGE24HOUR}</p>
                    <p><strong>Total Volume Last 24H:</strong> {snapshot.DISPLAY[this.props.match.params.coin].EUR.TOTALVOLUME24H}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderOtherCoins(){
    let otherCoins = []
    for (let coin in this.props.coinList.Data){
      otherCoins.push(
        <Link to={`${process.env.PUBLIC_URL}/coin/${coin}`} key={coin}>
          <span className='coin-tag'>{coin}</span>
        </Link>
      )
    }
    return otherCoins
  }

  render(){
    return(
      <div className="row row-no-padding row-col-no-padding main-content">
        <div className="col-md-12">
          <div className="box">
            {(this.props.coinList &&
            this.props.coinSnapshot[`${this.props.match.params.coin}Snapshot`]) &&
             this.handleResponse()}
          </div>
        </div>
        <div className="col-md-12">
          <div className="box">
            <div className='coin-info'>
              <div className='box-info'>
                <div className='box-header'>
                  <h2 className='header'>Other Coins</h2>
                </div>
                <div className='box-body'>
                  <div className='box-tags'>
                    {this.props.coinList && this.renderOtherCoins()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({...cryptoContentActions}, dispatch)
  }
}

function mapStateToProps(state){
  return {
    coinSnapshot: state.cryptoContentReducer,
    coinList: state.cryptoContentReducer.response,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coin)
