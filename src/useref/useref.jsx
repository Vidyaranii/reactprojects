import { useRef, useState } from "react"



const UseRef=()=>{
   const vidya =useRef(0)
   const[state,setState]=useState(0)
 const  Handeler=()=>{
    vidya.current+=1
    setState(state+1)
    console.log(vidya.current)
   }
    return(<>
    <h3>{state}</h3>
<h3>{vidya.current}</h3>
<button onClick={Handeler}></button>
</>


    )
}
export default UseRef