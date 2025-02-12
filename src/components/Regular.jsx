import { Component } from 'react'

class Regular extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         toggle: false
      }
    }

    increment(){
            this.setState({
                count: this.state.toggle? this.state.count + 1 : this.state.count
            })
    }

    toggle(){
        this.setState({
            toggle: this.state.toggle? false : true
        })
    }

  render() {
    console.log('Simple component')
    const {count} = this.state
    return (
      <div>
        <h2>Simple Component</h2>
        <div>{count}</div>
        <button onClick={() => this.toggle()}>Set Toggle</button>
        <button onClick={() => this.increment()}>Counter</button>
      </div>
    )
  }
}

export default Regular