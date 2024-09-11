import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { errorToast, sucessToast } from './toast'
const CustomToast=({message})=>{
    const vidya=()=>{
    
        // toast.success(message, {
        //     position: "top-center"
        //   });
        sucessToast('i am clicked','top-right')
        errorToast('i am error','top-left')
    }
    return(
        
<div>
        <button onClick={vidya}>Notify !</button>
        <ToastContainer />
      </div>
    )
}
export default CustomToast