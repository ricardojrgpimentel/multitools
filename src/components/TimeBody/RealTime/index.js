import React from 'react'
import moment from 'moment'

class RealTime extends React.Component{

  constructor(){
    super()
    this.state = {
      currentTime: moment().unix()
    }
  }

  componentDidMount(){
    this.currentTime = setInterval(() => this.setState({ ...this.state, currentTime: this.state.currentTime + 1}), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.currentTime)
  }

  render(){
    return(
      <p className='timestamp'>Current Unix time is {this.state.currentTime}</p>
    )
  }
}

export default RealTime