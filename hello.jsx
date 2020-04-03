import React, { Component } from 'react'
import ReactDom from 'react-dom'

class Hello extends Component {
  render() {
    return <h2>Hello React</h2>
  }
} 

ReactDom.render(<Hello/>, document.querySelector('#root'))