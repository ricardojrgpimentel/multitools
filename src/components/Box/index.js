import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cryptoContentActions from '../../actions/cryptoContentActions'

class Box extends React.Component{

  componentWillMount(){
    this.props.actions.fetchCoinValue(this.props.coin.Name)
  }

  renderCoinValue(coin){
    return(
      <div className='coin-value-list'>
        <p>EUR: {this.props.coinValue[`${this.props.coin.Name}Value`] ? this.props.coinValue[`${this.props.coin.Name}Value`].EUR : ''}</p>
        <p>USD: {this.props.coinValue[`${this.props.coin.Name}Value`] ? this.props.coinValue[`${this.props.coin.Name}Value`].USD : ''}</p>
        <p>BTC: {this.props.coinValue[`${this.props.coin.Name}Value`] ? this.props.coinValue[`${this.props.coin.Name}Value`].BTC : ''}</p>
      </div>
    )
  }

  render(){
    const COIN = this.props.coin

    return(
      <div className="col-md-6">
        <div className="box">
          <h1 className='coin-title'>{COIN.FullName}</h1>
          {console.log(COIN)}
          <p>Algorithm {COIN.Algorithm}</p>
          <div className='coin-info'>
            <img className='coin-logo' src={`https://cryptocompare.com${COIN.ImageUrl}`} alt={COIN.CoinName}/>
            {this.props.coinValue[`${COIN.Name}ValueLoading`] ? <p>Loading...</p> : this.renderCoinValue()}
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
  console.log(state)
  return {
    coinValue: state.cryptoContentReducer,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box)