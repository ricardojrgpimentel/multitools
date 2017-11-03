import React from 'react'
import RealTime from './RealTime'

class TimeBody extends React.Component{

  render(){
    return(
      <div className="row row-no-padding row-col-no-padding main-content"> 
        <div className="col-md-6">
          <div className="box">
            <RealTime />
          </div>
        </div>
      </div>
    )
  }
}

export default TimeBody