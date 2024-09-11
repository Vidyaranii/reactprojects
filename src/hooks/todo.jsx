import { useState } from "react";
import { TodoList } from "./vidya";
import { Button } from "bootstrap";

export const Todos = () => {
  const [data, setCount] = useState(TodoList());

  const addHandeler = () => {
    const length = data.length;
    const myobj = {
      id: length + 1,
      text: `item ${length + 1}`,
    };

    setCount([...data, myobj]);
  };

  // constclick=()=>{
    
  // }
  const removeHandeler = (idvalue) => {
   
    const filter = data.filter(eachid =>
      eachid.id!=idvalue
   )
    setCount(filter);
  };

  return (
    <>
      <button onClick={addHandeler}>add</button>

      {
        <ol>
          {data.map((each) => {
            return (
              <>
                <li>{each.text}</li>
                <button onClick={() => removeHandeler(each.id)}>delet</button>
                {/* <button onClick={click} >updated</button> */}
               
              </>

            );
          })}
        </ol>
      }
    </>
  );
};
