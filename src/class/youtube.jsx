import { Component } from "react";
import { Firstcomponent } from "../ca/first";
import Counter from "./count";

class YoutubeButton extends Component{
state={
    isSubscricbe:false,
    text1:'Subscrib',
    text2:'Subscribed',
}
clickHandler=()=>{
    this.setState({
        isSubscricbe:! this.state.isSubscricbe
    })

}

    render(){
        return(
            <>
           <button onClick={this.clickHandler}>{this.state.isSubscricbe?this.state.text2:this.state.text1}</button>
           {
           this.state. isSubscricbe?<div>
              <Counter/>
                <Firstcomponent/>
              
            </div>:<div><h3>please Subscrib</h3></div>
           }
           </>
        )
    }
}
export default YoutubeButton