import { useState } from "react"
import { Form } from "react-bootstrap"
import BasicExample from "../table/table"

const Controlled=()=>{
    const[model,setModel]=useState('')
    const[MobileNumber,setMobileNumber]=useState('')
    const[modelErr,setModelErr]=useState('')
   
    const[mobileErr,setMobileErr]=useState('')
    const [submittedData, setSubmittedData] = useState([]);
    
const changeHandele=(e)=>{
    const modelName=e.target.value
    setModel(modelName)
  
   
   
 const error=validate(modelName)
    
    console.log(error,'modelName')
if(error){
    setModelErr(error)

}else{
    setModelErr('')
}
console.log(modelName)

}

    const validate=(value)=>{
    let error=''
        const rex=/^[A-z]/i
        if(!value){
        error='please enter name'    
        }else if(!rex.test(value)){
            error='please enter the correct name'
        }
        return error
    }

    const onSubmit=(event)=>{
        event.preventDefault()
    
    
        console.log(modelErr,mobileErr,"error check")
    
    
        if(modelErr || mobileErr){
            alert("please fill properly")
        }else{
            setSubmittedData([...submittedData, { model, MobileNumber }]);
            // Clear the form
            setModel('');
            setMobileNumber('');
        }
    }


    const mobileHandeler=(event)=>{
        const number=event.target.value
        setMobileNumber(number)
        const numEntered=numberValidation(number)
    
    console.log(numEntered,'number')
if(numEntered){
    setMobileErr(numEntered)

}else{
    setMobileErr('')
}
console.log(number)

}


    const numberValidation=(num)=>{
        let numEntered=''
        const regExp=/^[6-9][0-9]{9}$/
        if(!num){
            numEntered='please entter mobile number'
        }
        else if(!regExp.test(num)){
            numEntered='please enter corrrrrrect number'
        }
        return numEntered
        }

   





    return(
        <>
       <form   onSubmit={onSubmit}  >
  <div className="form-group">
    <label htmlFor="username">UserName:</label>
    <input type="text" className="form-control" id="username"  value={model} onChange={changeHandele}/>
  {modelErr && <span style={{color:'red'}}
  >{modelErr} </span>}
   
  </div>
  <div className="form-group">
    <label htmlFor="pwd">MobileNumber:</label>
    <input type="password" className="form-control" id="pwd"value={MobileNumber} onChange={mobileHandeler} />
   { mobileErr && <span style={{color:'red'}}
  >{mobileErr} </span>}
   
  </div>
  <div className="form-group">
    <label htmlFor="pwd">passWord:</label>
    <input type="password" className="form-control" id="pwd"value={MobileNumber} onChange={mobileHandeler} />
   { mobileErr && <span style={{color:'red'}}
  >{mobileErr} </span>}
   
  </div>

  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>
<table  className="table table-striped table-bordered table-hover">
      <thead >
        <tr style={{ border: '1px solid black' }}>
          <th>#</th>
          
          <th>Username</th>
          <th>MobileNumber</th>
          
        </tr>
      </thead>
      <tbody>
      
      {submittedData.map((data, index) => (
                        <tr key={index} style={{ border: '1px solid black' }}>
                            <td>{index + 1}</td>
                            <td>{data.model}</td>
                            <td>{data.MobileNumber}</td>
                        </tr>
                    ))}
      </tbody>
    </table>
        </>
    )
}
export default  Controlled
