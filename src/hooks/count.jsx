import { useState } from "react"
import { Button } from "react-bootstrap"

const Count=()=>{
   const[countt,setCount]= useState(0)
const click=()=>{
   setCount( countt+1);
  }
 const clickk=()=>{
    if(countt>0)
    setCount( countt-1);
   }
   const reset=()=>{
    setCount(0)
   }
    return(
        <>
        <h3>current age is {countt}</h3>
        <Button onClick={click}>inc</Button>
        <Button onClick={clickk}>dec</Button>
        <Button onClick={reset}>rest</Button>
       
        </>
    )
}
export default Count