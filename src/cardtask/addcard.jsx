import { Component } from "react";

import Button from 'react-bootstrap/Button';



import Basic from "../ca/card";




class CardTask extends Component{

    state={
       Data:[{name:"vidya",salary:10000,role:"Angular dev"},{name:"akshi",salary:20000,role:"React dev"}]
    }

    clickHandler=()=>{
        const newData=[{name:"vijay",role:"Next js dev",salary:2000}]


       
        const updatedData=[...this.state.Data,newData]
   

  this.setState({
    Data:updatedData
  })




    }

    componentDidUpdate(){


    }

    removeHandler=(index)=>{

        console.log(index)
        const filteredData=this.state.Data.filter((_,id)=>id!==index)
        this.setState({
            Data:filteredData
        })
    }
    render(){
        return(
            <>
        <Button variant="primary"  onClick={this.clickHandler} >Add card</Button>
        <div className="container mt-5">
        <div className="row">

        {
            this.state.Data.length>0?
            this.state.Data.map((each,index)=>{
                return(
          

      <div className="col-sm-4">
        <Basic title={each.name}  ind={index} text={each.role}   removeHandler={this.removeHandler} />
        

      
     
    </div>


                )
            })
            :
            <h3>No data found</h3>
        }
              </div>
          </div>
            
            
          
            </>
        )
    }
}

export default CardTask