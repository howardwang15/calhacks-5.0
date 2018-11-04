import React from 'react'
import { Button } from './components/button'

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style='flex-direction:row'>
          <Button title="Learn">
          </Button>
          <Button title="Teach">
          </Button>
        </div>
      </div>
    )
  }
}
