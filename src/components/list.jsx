export const Unlist=(props)=>{
    const{list,children}=props
    console.log(props)
    return(
        <>
        <ul>
      <li>{children}</li>  
        
      
          </ul>
        </>
        
    )
}
export const Olist=()=>{
    return(
        <ol>
            <li>apple</li>
            <li>banana</li>
            <li>mango</li>
        </ol>
    )
}

