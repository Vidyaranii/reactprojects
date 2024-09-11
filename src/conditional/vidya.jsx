export const BackgroundImage=({text,bg='green'})=>{
    return(
        <div>
          <body style={{backgroundColor:bg}} >{text}</body>
            
            {text='winter'? <body style={{backgroundColor:bg}} ></body>:white}
        </div>
       
    )
}