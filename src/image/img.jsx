export const CustomImage=(props)=>{
    console.log(props)
    const{vidya,width='150',height='150'}=props
    return(
        <img src={vidya}  height={height} width={width}/>
    )
}