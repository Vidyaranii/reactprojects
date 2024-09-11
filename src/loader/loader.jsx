

import {DNA} from "react-loader-spinner"
const CustomDNALoader =()=>{
    return(
       
        <DNA
            visible={true}
            height="120"
            width="120"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />)
   
}
export default CustomDNALoader