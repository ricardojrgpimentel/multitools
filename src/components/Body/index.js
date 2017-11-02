import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as workbenchRoomActions from '../../actions/workbenchRoomActions'
import * as cryptoContentActions from '../../actions/cryptoContentActions'

class Body extends React.Component{

  constructor(){
		super()
		this.handleClick =  this.handleClick.bind(this)
	}

  handleClick(){
		console.log('PRESSED')
  }

  componentWillMount(){
    this.props.actions.fetchcoinList()
  }
  
  handleCoinList(coinList, coinsToFetch){
    let coinDivs = []
    let coinKey = 1

    for(let coinId of coinsToFetch) {
      for(let coin in coinList.Data) {
        if(coinId === coinList.Data[coin].Id){
          coinDivs.push(
            <div key={coinKey++} className="col-md-6">
              <div className="box">
                <h1 className='coin-title'>{coinList.Data[coin].FullName}</h1>
              </div>
            </div>
          )
        } 
      }
    }
    return coinDivs
  }

  handleTotalCoinList(coinList, coinsToFetch){
    let coinDivs = []
    let coinKey = 1

    for(let coinId of coinsToFetch) {
      for(let coin in coinList.Data) {
        if(coinId !== coinList.Data[coin].Id){
          coinDivs.push(
            <div key={coinKey++} className="col-md-6">
              <div className="box">
                <h1 className='coin-title'>{coinList.Data[coin].FullName}</h1>
              </div>
            </div>
          )
        } 
      }
    }
    return coinDivs
  }

  render(){
    return(
      <div className="col-md-9 body">
        <header className='header h-white'>
          <h1 className="site-title">Crypto Convert</h1>
        </header>
        <div className="row row-no-padding row-col-no-padding main-content">
          <div className="col-md-12">
            <div className="box">
              TESTE
            </div>
          </div>
          {this.props.coinList ? this.handleCoinList(this.props.coinList, this.props.coinList.DefaultWatchlist.CoinIs.split(',')) : ''}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({...workbenchRoomActions, ...cryptoContentActions}, dispatch)
  }
}

function mapStateToProps(state){
  return {
    coinList: state.cryptoContentReducer.response,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
