import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.data={}
       

        this.state={
              intervalId : null
        }
    }

    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.data[name] = value;
        this.props.sendData(this.data);
    }

    makeStep = () => {
        if(!this.props.currentTamplate){
            const result = { totalSumma:Number(this.props.totalSumma) + Number(this.props.step)}
            this.props.makeStep(result);
        }
        else{
            const result = { totalSumma:Number(this.props.totalSumma) - Number(this.props.step)}
            this.props.makeStep(result);
        }
        
    }

    changeTamplate = () =>{
        const result = {currentTamplate:this.props.currentTamplate ? false :true};
        this.props.changeTamplate(result);
    }

    componentDidMount(){
        this.makeStepAuto();
    }

    makeStepAuto = () =>{
        if(this.state.intervalId === null){
            setInterval(this.stopAuto,30000);
            this.setState((state)=>{
            return {
                ...state,
                intervalId : setInterval(this.makeStep, 3000)
            }
        }) 
        }
    }

    stopAuto = () => {
        clearInterval(this.state.intervalId);
        this.setState((state)=>{
            return {
                ...state,
                intervalId : null
            }
        }) 
    }

  render() {
    return (
      <div>
          <input placeholder='Enter step' name='delta' type="number" onChange={this.onChange} />
          <button onClick={this.makeStep}>Make Step forvord</button>
          <button onClick={this.changeTamplate}>Change template</button>
          
          <button onClick={this.makeStepAuto}>Auto step start</button>
          <button  onClick={this.stopAuto}> Auto step stop</button>
       </div>
    )
  }
}
