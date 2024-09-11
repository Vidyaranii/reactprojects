export const CustomButton=(props)=>{
    const{bg="green",text='button'} =props
    const buttonText="Click me" 
    return(
<button style={{backgroundColor:bg}} >{text}</button>
    )

}
