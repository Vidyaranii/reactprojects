import { Component } from "react";
import axios from "axios";
import { SecondaryHeading } from "../headings/heading";
import CustomDNALoader from "../loader/loader";
import { Button } from "react-bootstrap";
import Basic from "../ca/card";

export class DisplayAll extends Component{
    state={
        products:[],
        loading:true
    }
    componentDidMount(){
        this.display()
    }

    display=async()=>{
       const {status,data}  =await axios.get('https://fakestoreapi.com/products')
   if(status===200){
    this.setState({
        products:data,
        loading:false
    })
   }
       
    }
    render(){
        return(
         
         <>
       
         <Button variant="primary"  onClick={this.clickHandler} >ele</Button>
         <Button variant="primary"  onClick={this.clickHandler} >jew</Button>
         <Button variant="primary"  onClick={this.clickHandler} >mens</Button>
        
         { 
           this.state.loading?<CustomDNALoader/>   :<>
           <h3>productssss..</h3>  
           <div className="container mt-5">
        <div className="row">
              
             {
                
                this.state.products.map(each=>{
                    return(
                        <div className="col-sm-4" key={each.id}>
                            
                            {/* <img src={each.image} height={150} width={150}/>
                            <SecondaryHeading sec={each.title}/>
                            <SecondaryHeading  sec={each.description}/> */}
                            
    
                            <Basic title={each.name}   text={each.description} vidya={each.image} />
                         
                            </div>
                        
                    )
                })
            }
            </div>
            </div>
          </>
         }
         </>
        )
        
    }
   
}
export default DisplayAll