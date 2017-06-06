import React from 'react'
import './HomeView.scss'


class HomeView extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        test: 'test',
        ceva: 'altceva'
      }
    }
    click(event) {
      console.log(this.state.test);
      console.log(event);
    }

    render() {
      return (
      <div className="Aplication">
        <div className="MainWrapper"></div>
        <div className="MainOdds"></div>
        <div className="HandSelector"></div>
        <button onClick={event => this.click(event)}>Click me!</button>
      </div>
      )
    }
}

export default HomeView

