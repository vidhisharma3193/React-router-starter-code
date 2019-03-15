import React, { Component } from 'react';
import { DragonCard } from './DragonCard';

export class Dragons extends Component {

  render() {
    return (
        <div style={{textAlign: "center"}}>
            <h2> All Dragons</h2>

            {this.props.dragons.map( dragon => (   
                     <DragonCard {...dragon} />
            ))}

        </div>
    )
  }
}

