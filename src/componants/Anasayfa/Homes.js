import React, { Component } from 'react'
import Aramacard from './Anasayfa/Aramacard';
import Sononilan from '../Sononilan';
import Fouter from '../Fouter';

class Home extends Component {
  render() {
    return (
      <div>
        <Aramacard/>
        <Sononilan/>
        
      </div>
    )
  }
}
export default Home;
