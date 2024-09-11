import axios from "axios"
import { useEffect, useState } from "react"

// 'https://dummyjson.com/recipes/search?q=Margherita'

const TableC =()=>{
    const[state,setState]=useState([])
    const [qurery,setQurery]=useState('')
    useEffect(()=>{fetchProducts()},[qurery])
    const fetchProducts = async () => {
        try {
          const { data, status } = await axios.get(`https://dummyjson.com/recipes/search?q=${qurery}`);
        //   console.log(data)
          if (status === 200) {
            setState(data.recipes );
            console.log(data.recipes)
          }
        } catch (err) {
          console.error("Failed to fetch products", err);
        }
      }
    const  searchHandeler=(event)=>{
        setQurery(
event.target.value
        )
      }
     
return(
    <div >
<input type="text" value={qurery} onChange={searchHandeler}/>

    <table >


    <th>ID</th>
    <th>Name</th>
    <th>Image</th>


        {

           
           state.map(each=>{
            return(
                < >
                  <tr >
                    <td>{each.id}  </td>
                    <td>{each.name}  </td>
                    <td>{each.ingredients} </td>
                    <td><img src={each.image} width={100} height={100}/> </td>
                </tr>
                </>
            )
              
            })
        }
    </table>
    </div>
)
       
      

}
export default TableC

