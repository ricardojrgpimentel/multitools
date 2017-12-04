import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cryptoContentActions from '../../actions/cryptoContentActions'

class Coin extends React.Component{

  componentWillMount(){
    this.props.actions.fetchCoinSnapshot(this.props.match.params.coin)
    !this.props.coinList && this.props.actions.fetchcoinList()
  }

  handleResponse(){
    let coin = this.props.coinList.Data[this.props.match.params.coin]
    let snapshot = this.props.coinSnapshot[`${this.props.match.params.coin}Snapshot`]
    console.log(snapshot)
    return(
      <div className='coin-info'>
        <div className="row row-no-padding row-col-no-padding main-content" style={{width: '100%'}}>
          <div className='col'>
            <img className='coin-logo' src={`https://cryptocompare.com${coin.ImageUrl}`} alt={coin.CoinName}/>
          </div>
          <div className='col'>
            <p>Name: {coin.FullName}</p>
            <p>Algorithm: {coin.Algorithm}</p>
            <p>Proof Type: {coin.ProofType}</p>
          </div>
          <div className='col'>
            <p>Value: {snapshot.DISPLAY[this.props.match.params.coin].EUR.PRICE}</p>
            <p>Supply: {snapshot.DISPLAY[this.props.match.params.coin].EUR.SUPPLY}</p>
            <p>Market Cap: {snapshot.DISPLAY[this.props.match.params.coin].EUR.MKTCAP}</p>
          </div>
        </div>
      </div>
    )
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
