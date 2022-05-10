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
          <p > Current tamplate : <span className='tamplate'>{this.props.currentTamplate ? "back" : "forword" }</span></p>
          <p>Auto interval will work 30 sec</p>
          <p>Frequency: {this.props.frequency}</p>
          <p>Curent time : {this.props.time}</p>
      </div>
    )
  }
}
