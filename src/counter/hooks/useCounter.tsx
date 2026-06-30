import { useState } from 'react'
/* Usamos el use para indicar que es un hook */
export const useCounter = (initialValue:number = 10) => {
          const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => { setCounter(counter + 1)};
    const handleSubtract = () => {setCounter(counter - 1) };
    const handleReset = () => {setCounter(initialValue)};
   
   /* Devuelvo un objeto con datos y funciones para que 
   otros componentes puedan utilizarlos*/
    return {
        //Values
        counter, 
        //Methods / actions
        handleAdd,
        handleSubtract,
        handleReset
    }
}
