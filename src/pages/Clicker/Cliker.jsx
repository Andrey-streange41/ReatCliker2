import React, { Component } from 'react';
import Display from '../../components/Display';
import Menu from '../../components/Menu';


export default class Cliker extends Component {
    constructor(props){
        super(props);
        this.state = {
            delta: 1,
            totalSumma: 0,
            currentTamplate : false
        }
    }

   
    changeTamplate = (data)=>{
        this.setState((state)=>{
            return{...state,
                ...data
            }
        })
    }

  render() {
    return (
      <div>
          <Menu changeTamplate={this.changeTamplate} currentTamplate={this.state.currentTamplate} sendData={this.changeTamplate} makeStep={this.changeTamplate} step={this.state.delta} totalSumma={this.state.totalSumma}/>
          <Display currentTamplate={this.state.currentTamplate} delta={this.state.delta} totalSumma={this.state.totalSumma} />

      </div>
    )
  }
}
