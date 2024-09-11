import { Component } from "react";
import axios from "axios";

class FakeapiProducts extends Component{
    state={
        products:[],
       
    }
    componentDidMount(){
        this.display()
    }

    display=async()=>{
       const {status,data}  =await axios.get('https://fakestoreapi.com/products')
   if(status===200){
    this.setState({
        products:data,
     
    })
}
    }
  render(){
return(
    <>
  {
    <table>
        {
            this.state.products.map(each=>{
        return(        
<tr>
    <td>{each.title}</td>
    <td>{each.description}</td>
    <td><img src={each.image} width={100} height={100}/></td>
    <td>{each.price}</td>
   
</tr>
)
            })
        }
    </table>
      
  }
    </>
)


  }
 }
 export default FakeapiProducts
