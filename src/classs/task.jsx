import axios from "axios";
import { Component } from "react";

class Task extends Component{
    state={
   products:[],
   finaldata:[],
   index:0,
    };
componentDidMount(){
  this.display()
}
   
  display=async()=>{
    const{status,data}=await axios.get('https://fakestoreapi.com/products');
    if(status==200){
      this.setState({
        products:data,


    });
    }
    clickHandeler = ()=>{
      const {products,finaldata,index}=this.state;
      const newdata=[...finaldata,products[index]]
      this.setState({
          finaldata:newdata,
          index:this.state.index+1,
      });
         }
    
  

  
   };




   
    render(){
        return(
            <>
              <button onClick={this.clickHandeler}>add </button>
              <table>
                
               {
                 this.state.finaldata.map(each=>{
                   return(
                    <>
                    <tr>
                     <td>{each.id}</td>
                     <td>{each.description}</td>
    <td><img src={each.image} width={100} height={100}/></td>
    <td>{each.price}</td>
    </tr>
                    </>
                   )
                    
                 })
               }
              </table>
            </>
        )
    }
}
export default Task