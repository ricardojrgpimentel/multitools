import React from 'react'
import RealTime from './RealTime'
import moment from 'moment'

class TimeBody extends React.Component{

  constructor(){
    super()
    this.state = {
      date: moment().unix(),
      humanDate: false,
      year: moment().format('YYYY'),
      month: moment().format('MM'),
      day: moment().format('DD'),
      hour: moment().format('hh'),
      minute: moment().format('mm'),
      second: moment().format('ss'),
    }
    this.saveDate = this.saveDate.bind(this)
    this.handleConvertDate = this.handleConvertDate.bind(this)
    this.handleHumanDateInput = this.handleHumanDateInput.bind(this)
  }

  saveDate(e){
    this.setState({
      ...this.state,
      date: e.target.value
    })
  }

  handleConvertDate(){
    this.setState({
      ...this.state,
      humanDate: moment.unix(this.state.date).format("dddd DD MMMM YYYY HH:mm:ss Z")
    })
  }

  changeHumanDateInputState(field, value){
    this.setState({
      ...this.state,
      [field]: value
    })
  }

  handleHumanDateInput(e){
    switch(e.target.name){
      case 'YYYY':
        this.changeHumanDateInputState('year', e.target.value)
        break
      case 'MM':
        this.changeHumanDateInputState('month', e.target.value)
        break
      case 'dd':
        this.changeHumanDateInputState('day', e.target.value)
        break
      case 'hh':
        this.changeHumanDateInputState('hour', e.target.value)
        break
      case 'mm':
        this.changeHumanDateInputState('minute', e.target.value)
        break
      case 'ss':
        this.changeHumanDateInputState('second', e.target.value)
        break
      default:
    }
  }

  unixDate(){
    if(this.state.year && this.state.month && this.state.day && this.state.hour && this.state.minute && this.state.second)
      return moment(`${this.state.year}/${this.state.month}/${this.state.day} ${this.state.hour}:${this.state.minute}:${this.state.second}`, "YYYY/M/D H:mm:ss").unix()
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
              <button className='btn-multibox' onClick={this.handleConvertDate}>Timestamp to Human Date</button>
            </div>
            {this.state.humanDate}
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <p className='string-date-description'>Current Human Readable Date</p>
            <input onChange={this.handleHumanDateInput} value={this.state.year} placeholder="year" className="date" name="YYYY" size="4" maxLength="4" type="text"/>
            -
            <input onChange={this.handleHumanDateInput} value={this.state.month} placeholder="month" className="date" name="MM" size="2" maxLength="2" type="text"/>
            -
            <input onChange={this.handleHumanDateInput} value={this.state.day} placeholder="day" className="date" name="dd" size="2" maxLength="2" type="text"/>
            |
            <input onChange={this.handleHumanDateInput} value={this.state.hour} placeholder="hour" className="date" name="hh" size="2" maxLength="2" type="text"/>
            :
            <input onChange={this.handleHumanDateInput} value={this.state.minute} placeholder="minute" className="date" name="mm" size="2" maxLength="2" type="text"/>
            :
            <input onChange={this.handleHumanDateInput} value={this.state.second} placeholder="second" className="date" name="ss" size="2" maxLength="2" type="text"/>
            <div className="calculated-date">
               Unix Time: {this.unixDate()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeBody