import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'
import STKClock from '../../src/components/STKClock'

class Demo extends Component {
  render() {
    return <div>
      <h1>Anima OS React component library Demo</h1>
      <Example/>
      <STKClock/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
