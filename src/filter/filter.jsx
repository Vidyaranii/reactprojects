import { Component } from "react";
import axios from "axios";
import { SecondaryHeading } from "../headings/heading";
import CustomDNALoader from "../loader/loader";
import { Button } from "react-bootstrap";


 class DisplayProducts extends Component{
    state={
        products:[],
        categories:[],
        loading:true
    }
    componentDidMount(){
        this.display()
        this.filter()
      

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
    filter=async()=>{
        const{data} =await axios.get('https://fakestoreapi.com/products/categories')
       
        this.setState({
            categories:[...data,'all']
        })
    }
   
    clickselect=(selectedCategory)=>{
        if(selectedCategory==='all'){
        this.display()
       
        }
        else{
            this.category(selectedCategory)
        }
        // this.category(selectedCategory)
      
    }




   category=async(selected)=>{
    const{data} = await axios.get(`https://fakestoreapi.com/products/category/${selected}`)
    
    this.setState({
        products :data
    })
    
   }
    render(){
        return(
         
         <>
       
        

{
     this.state.loading?<CustomDNALoader/>   :<>
    
       {
         this.state.categories.map(each=>{
            return(
             <>
              <Button variant="primary" onClick={()=>this.clickselect(each)}>{each}</Button>
            
                        </>
                     )
                    }) 
       }
        

      
       </>
    }
                


        
         { 
           this.state.loading?<CustomDNALoader/>   :<>
          
         
              
             {
                
                this.state.products.map(each=>{
                    return(
                     <>
                      <SecondaryHeading sec={each.id}/>
                            <img src={each.image} height={150} width={150}/>
                            <SecondaryHeading sec={each.title}/>
                            <SecondaryHeading  sec={each.description}/>
                            
    
                           
                       </>  
                           
                        
                    )
                })
                
            }
            
          
          </>
         }
         </>
        )
        
    }
   
}
export default DisplayProducts