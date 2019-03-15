import React, { Component } from 'react';
import { dragons }  from './data'
import {Dragons} from './Dragons'
import { War } from './War';
import { Home } from './Home';






let updateElementInArray = (array, id, values) => {
  return array.map( element => {
    if(element.id == id){
      return { ...element, ...values }
    } else {
      return element
    }
  })
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      dragons: dragons,
      selected: null
    }
  }

  sendDragonToWar = (id) => {
    this.setState({
      dragons: updateElementInArray(this.state.dragons, id, { atWar: true })
    })
  }

  sendDragonHome = (id) => {
    this.setState({
      dragons: updateElementInArray(this.state.dragons, id, { atWar: false })
    })
  }

  changeSelected = (selected) => {
    this.setState({
     selected: selected
    })
  }

  render() {
   
    let dragonsAtHome = this.state.dragons.filter( dragon => !dragon.atWar )
    let dragonsAtWar = this.state.dragons.filter( dragon => dragon.atWar )
  
    let display;


    switch (this.state.selected){
      case "Home":
        display  = <Home dragons={dragonsAtHome} selectDragon={this.sendDragonToWar} />
        break;
      case "War":
        display  = <War  dragons={dragonsAtWar} selectDragon={this.sendDragonHome}/>
        break;
      case "Dragons":
        display  = <Dragons dragons={this.state.dragons} />
        break;
      default:
        display = null
        break;
    }
    return (
      <div>
      <ul>
        <li><a onClick={() => this.changeSelected("Home")}>Home</a></li>
        <li><a onClick={() => this.changeSelected("War")}>War</a></li>
        <li><a onClick={() => this.changeSelected("Dragons")}>Dragons</a></li>

        </ul>
        {display}
       

      </div> 

    )
  }
}

export default App;