import { useReducer, useState } from "react"
const reducerFunction=(state,action)=>{
    switch(action.type){
        case 'ADD':
        return{...state,todos:[...state.todos,action.payload]}
        case 'DELETE':
            return{
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload)
            }
            // case 'UPDATE':
            // return{
            //     ...state,
            //     todos:
            // }
        default:
        return state
    }
    

}

const ReduceExamle=()=>{

const initialState={
   
    usename:'vidya',
    age:'22',
    todos:[]


}
const[currentState,disatch]=useReducer(reducerFunction,initialState)
const[entertodos,setEntertodos]=useState('')

const todosHandeler=((event)=>{
  setEntertodos(
    event.target.value
  
  )
})

const submittodo=()=>{
    if(entertodos){
        disatch({
            type:'ADD',
            payload:entertodos
        })
    }
    setEntertodos('')
   
}
const deleteHandeler=(value)=>{
    disatch({
        type:'DELETE',
        payload:value
    })
}
const updateHandeler=(value)=>{
    disatch({
        type:'UPDADATE ',
        payload:value
    })
}
 
return(
    <>
    <input type="text" onChange={todosHandeler}   value={entertodos}/>
    <button onClick={submittodo}>add</button>
   
 
    {currentState.todos.map((each, index) => (
        <>
        <h5 key={index}>{each}

        <button onClick={()=>deleteHandeler(index) }>delete</button>

        {/* <button onClick={()=>updateHandeler(index) }>Update</button> */}
            </h5> 
       
        </>

        
        
      )
    )
      }
   
    </>
)
}
export default ReduceExamle



// import { useReducer, useState } from "react";

// const reducerFunction = (state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return {
//         ...state,
//         todos: [...state.todos, action.payload] // Correctly add new todo to the todos array
//       };
//     default:
//       return state;
//   }
// };

// const ReduceExample = () => {
//   const initialState = {
//     username: 'vidya',
//     age: '22',
//     todos: ['hii', 'hello'] // Initial todos array
//   };

//   const [currentState, dispatch] = useReducer(reducerFunction, initialState);
//   const [enteredTodo, setEnteredTodo] = useState('');

//   const todosHandler = (event) => {
//     setEnteredTodo(event.target.value); // Update the entered todo state
//   };

//   const submitTodo = () => {
//     if (enteredTodo.trim()) {
//       dispatch({
//         type: 'ADD',
//         payload: enteredTodo // Dispatch the entered todo as the action payload
//       });
//       setEnteredTodo(''); // Clear input field after submission
//     }
//   };

//   return (
//     <>
//       <input type="text" onChange={todosHandler} value={enteredTodo} />
//       <button onClick={submitTodo}>Add</button> {/* Use onClick */}
//       {currentState.todos.map((each, index) => (
//         <h1 key={index}>{each}</h1> // Render each todo
//       ))}
//     </>
//   );
// };

// export default ReduceExample;
