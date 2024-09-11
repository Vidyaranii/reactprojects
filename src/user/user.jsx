// import { Component, useRef, useState } from "react";
// import { Form } from "react-bootstrap";



// const Vidya=()=>{
//  const userName=   useRef('')
//  const passWord=useRef('')
//  const[formErrors,setformErrors]=useState({})

//  const onSubmit=(e)=>{
//     e.preventDefault()
//     const Name=userName.current.value
//     const Password=passWord.current.value
//     const formErrors=validate(Name,Password)
//     if(Object.keys(formErrors).length>0){
//         setformErrors(formErrors)

//     }else{
//         loginApi(Name,Password)
//     }
//     console.log(formErrors)

//  }
 
// const validate=(user,pass)=>{
//     const FormErrors={

//     }
//     if(!user){
//         validations.userError='please ene name'
//     }
//     else if(user.length>20){
//         FormErrors.userError='please ene name d n have geae han 20'
//     }
   
//         if(!pass){
//            FormErrors.passError='please ene name'
//         }
//         else if(pass>20){
//             FormErrors .passError='please ene name d n have geae han 20'
//         }
//         return FormErrors
//     }

//         const loginApi=async(user,pass)=>{
//             try{
//             const response= await axios.post("https://dummyjson.com/auth/login",{
    
//             "username": user,
//             "password":pass,
    
//         })
//         console.log(response)
    
//     }catch(err){
//         console.log(err)
    
//     }

// }
//     return(
//         <Form onSubmit={onSubmit}>
//           <label htmlFor="User">Enter Username:</label>
//             <input type="text" id='User' ref={userName}/><br></br>
//             <label htmlFor="mobile">MobileNumber:</label><br></br>
//             <input type="number" id='mobile' ref={passWord}/>
//             <button type="submit">submit</button>
//         </Form>
//     )

// }
// export default Vidya


import axios from "axios"
import { useRef, useState } from "react"

import BasicExample from "../table/table"





const UncontrolledComponent =()=>{


    const usernameRef=useRef("")
    const passwordRef=useRef("")

    const [formErrors,setFormErrors]=useState({})


    const onSubmit=(event)=>{
        event.preventDefault()

        const usernameEntered=usernameRef.current.value

        const passwordEntered=passwordRef.current.value


        const formErrors=validations(usernameEntered,passwordEntered)

        if(Object.keys(formErrors).length>0){
            //Trigger the errors 
            setFormErrors(formErrors)
        }else{
            // Hit the api 
            loginApi(usernameEntered,passwordEntered)
        }


        console.log(formErrors)



    }




    const validations=(username,password)=>{

        const FormErrors={
           

        }


        if(!username){
            FormErrors.usernameError="Please enter username"
        }else if(username.length>20){
            FormErrors.usernameError="Please enter less than 20 characters"
        }

        if(!password){
            FormErrors.passwordError="Please enter password"
        }else if(password.length>20){
            FormErrors.passwordError="Please enter less than 20 characters"
        }

        return FormErrors

    }

    const loginApi=async(username,password)=>{
        try{
        const response= await axios.post("https://dummyjson.com/auth/login",{

        "username": username,
        "password":password,

    })
    console.log(response)

}catch(err){
    console.log(err)

}


    }
    return(
        <>

<form  onSubmit={onSubmit} >
  <div className="form-group">
    <label htmlFor="username">Email address:</label>
    <input type="text" className="form-control" id="username"  ref={usernameRef}  />
    <span style={{color:"red"}} >{formErrors?.usernameError}</span>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef} />
    <span style={{color:"red"}} >{formErrors?.passwordError}</span>
  </div>

  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>


<BasicExample/>



        
        
        
        </>
    )
}

export default UncontrolledComponent









