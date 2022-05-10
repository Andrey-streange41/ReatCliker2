import React, { Component } from 'react';
import "../Display/Display.modules.css";

export default class Display extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className='display'>
          <p> Step : {this.props.delta} </p>
          <p> Total summa : {this.props.totalSumma} </p>
          <p className='tamplate'> Current tamplate : {this.props.currentTamplate ? "back" : "forword" }</p>
      </div>
    )
  }
}
