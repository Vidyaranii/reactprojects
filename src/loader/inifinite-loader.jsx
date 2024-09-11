import { InfinitySpin } from "react-loader-spinner"
const InifiniteLoader=(props)=>{
    return(
        <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
        {...props}
        /> 
    )
}
export default InifiniteLoader