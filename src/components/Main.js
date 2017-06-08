/* eslint-disable max-len */
import React from 'react'

import './style.css'

 import HandInsert from './HandInsert'

class Main extends React.Component {
  constructor (props) {
    super()
    this.state = {
      deck: ['2c', '2d', '2h', '2s', '3c', '3d', '3h', '3s', '4c', '4d', '4h', '4s', '5c', '5d', '5h', '6s', '6c', '6d', '6h', '6s', '7c', '7d', '7h', '7s', '8c', '8d', '8h', '8s', '9c', '9d', '9h', '9s', 'Tc', 'Td', 'Th', 'Ts', 'Jc', 'Jd', 'Jh', 'Js', 'Qc', 'Qd', 'Qh', 'Qs', 'Kc', 'Kd', 'Kh', 'Ks', 'Ac', 'Ad', 'Ah', 'As'],
      deckInit: ['2c', '2d', '2h', '2s', '3c', '3d', '3h', '3s', '4c', '4d', '4h', '4s', '5c', '5d', '5h', '6s', '6c', '6d', '6h', '6s', '7c', '7d', '7h', '7s', '8c', '8d', '8h', '8s', '9c', '9d', '9h', '9s', 'Tc', 'Td', 'Th', 'Ts', 'Jc', 'Jd', 'Jh', 'Js', 'Qc', 'Qd', 'Qh', 'Qs', 'Kc', 'Kd', 'Kh', 'Ks', 'Ac', 'Ad', 'Ah', 'As'],
      insertedHand: [],
      altceva: 'altceva2'
    }
  }

  click (event) {
    console.log(event);
  }

  render () {
    return (
      <div className='Aplication'>
        <div className='MainWrapper'>a</div>
        <div className='MainOdds'>b</div>
        <HandInsert deck={this.state.deck} />
        <button onClick={event => this.click(event)}>Click me!</button>
      </div>)
  }
}
export default Main
