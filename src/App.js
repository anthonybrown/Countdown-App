import React, { Component } from 'react'
import Clock from './Clock'
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
          <Clock />
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
