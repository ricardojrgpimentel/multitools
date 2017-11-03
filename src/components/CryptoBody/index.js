import React from 'react'
import CryptoBox from '../CryptoBox'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as workbenchRoomActions from '../../actions/workbenchRoomActions'
import * as cryptoContentActions from '../../actions/cryptoContentActions'

class CryptoBody extends React.Component{

  constructor(){
    super()
    this.state = {
      loadMore: false
    }
		this.handleClick =  this.handleClick.bind(this)
	}

  handleClick(){
    this.setState({
      ...this.state,
      loadMore: !this.state.loadMore
    })
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
            <CryptoBox 
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
          <div onClick={this.handleClick} className="box">
            TESTE
          </div>
        </div>
        {this.props.coinList ? this.handleCoinList(this.props.coinList, this.props.coinList.DefaultWatchlist.CoinIs.split(',')) : 'Loading...'}
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

export default connect(mapStateToProps, mapDispatchToProps)(CryptoBody)
