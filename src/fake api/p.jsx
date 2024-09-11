import { Component } from "react";

 export class Dataaa extends Component{
    state={
        data:'vidya'
    } 
    vidya=()=>{
         this.setState({
        data:'hi'
    })
    }
   
   
    render(){
        return(
            console.log(this.state.data)
           
        )
    }
}
