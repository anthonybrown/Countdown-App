import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      deadline: 'December 17th, 2017',
      newDeadLine: ''
    }
  }

  componentDidMount() {
   this.textInput.focus()
  }

  changeDeadLine () {
    this.setState({ deadline: this.state.newDeadLine })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-title'>
          Countdown to {this.state.deadline}
        </div>
        <div>
          <div className='Clock-days'>14 Days</div>
          <div className='Clock-hours'>30 hours</div>
          <div className='Clock-minutes'>15 minutes</div>
          <div className='Clock-seconds'>20 seconds</div>
        </div>
        <div>
          <input
            type='text'
            ref={(input) => { this.textInput = input }}
            onChange={e => this.setState({ newDeadLine: e.target.value })}
            placeholder='new date' />
          <button
            onClick={() => this.changeDeadLine()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App
