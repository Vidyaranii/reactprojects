import { toast } from "react-toastify";
export const sucessToast=(message,position)=>{
    toast.success(message, {
        position:position
      });
    
}
export const errorToast=(message,position)=>{
    toast.error(message, {
        position:position
      });
    
}
