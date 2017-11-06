import React from 'react'
import RealTime from './RealTime'
import moment from 'moment'

class TimeBody extends React.Component{

  constructor(){
    super()
    this.state = {
      date: moment().unix()
    }
    this.saveDate = this.saveDate.bind(this)
    this.handleConvertDate = this.handleConvertDate.bind(this)
  }

  saveDate(e){
    this.setState({
      ...this.state,
      date: e.target.value
    })
  }

  handleConvertDate(){
    console.log(this.state.date)
    console.log(moment(this.state.date))
  }

  render(){
    return(
      <div className="row row-no-padding row-col-no-padding main-content"> 
        <div className="col-md-6">
          <div className="box">
            <RealTime />
            <div className="input-wrapper" style={{justifyContent: 'space-around'}}>
              <div>
                <input onChange={(e) => {this.saveDate(e)}} type="text" value={this.state.date}/>
              </div>
              <button onClick={this.handleConvertDate}>Timestamp to Human Date</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeBody