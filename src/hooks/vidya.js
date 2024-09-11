export const TodoList=()=>{
   const data=[]
  for(let i=0;i<=10;i++){
    const mydata={
        id:i,
        text:`item ${i}`
    }
    data.push(mydata)
  }
  return data
}
TodoList()