import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Book from './Book'
import * as workbenchRoomActions from '../../actions/workbenchRoomActions'
import * as cryptoContentActions from '../../actions/cryptoContentActions'

class CryptoCheck extends React.Component{

  componentWillMount(){
    !this.props.coinList && this.props.actions.fetchcoinList()
  }

  handleCoinList(coinList, coinsToFetch){
    let coinDivs = []
    let coinKey = 1

    for(let coinId of coinsToFetch) {
      for(let coin in coinList.Data) {
        if(coinId === coinList.Data[coin].Id){
          coinDivs.push(
            <Book
              coin={coinList.Data[coin]}
              key={coinKey++}
            />
          )
        }
      }
    }
    return coinDivs
  }

  render(){

    return(
      <div className="row row-no-padding row-col-no-padding main-content">
        <div className="col-md-12">
          <div className="box">
            <div className="row row-no-padding row-col-no-padding main-content">
              {this.props.coinList ? this.handleCoinList(this.props.coinList, this.props.coinList.DefaultWatchlist.CoinIs.split(',')) : 'Loading...'}
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CryptoCheck)
