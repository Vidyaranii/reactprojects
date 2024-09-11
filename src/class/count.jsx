import { Component } from "react";
import { errorToast, sucessToast } from "../toast/toast";

class Counter extends Component{

state={
    count:0
}
incChange=()=>{
    this.setState({
      count:this.state.count+1  
    },()=>{
        sucessToast(`this current count ${this.state.count}`,'top-right')
    })
}
decChange=()=>{
    this.setState({
        count:this.state.count-1 
    },()=>{
        errorToast(`this current count ${this.state.count}`,'top-right')
    })
}
recChange=()=>{
    this.setState({
        count:0
    },()=>{
        sucessToast(`this current count ${this.state.count}`,'top-right')
    })
}


    render(){
        return(
            <>
            <h2>Counter {this.state.count}   </h2>
            <button onClick={this.incChange}>inc</button>
            <button onClick={this.decChange}>dec</button>
            <button onClick={this.recChange}>rec</button>
            </>

        )
    }
}
export default Counter