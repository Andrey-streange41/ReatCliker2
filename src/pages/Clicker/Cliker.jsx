import React, { Component } from 'react';
import Display from '../../components/Display';
import Menu from '../../components/Menu';


export default class Cliker extends Component {
    constructor(props){
        super(props);
        this.state = {
            delta: 1,
            totalSumma: 0,
            currentTamplate : false,
            frequency : 2,
            time : 0,
            timeId:null
        }
    }

    changeTime = () =>{
        this.setState((state)=>{
            return {
                ...state,
                time:this.state.time+1
            }
        })
    }

    componentDidMount(){
        setTimeout(()=>{clearInterval(this.state.timeId); this.setState((state)=>{
            return{...state, timeId : null}
        })},30000);
       
        setInterval(this.changeTime, 1000);
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
          <Menu frequency={this.state.frequency} changeTamplate={this.changeTamplate} currentTamplate={this.state.currentTamplate} sendData={this.changeTamplate} makeStep={this.changeTamplate} step={this.state.delta} totalSumma={this.state.totalSumma}/>
          <Display time={this.state.time} frequency={this.state.frequency} currentTamplate={this.state.currentTamplate} delta={this.state.delta} totalSumma={this.state.totalSumma} />

      </div>
    )
  }
}
