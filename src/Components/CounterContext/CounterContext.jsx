import { useState, createContext } from 'react';
const counterContext = createContext();


//Contex Provider used to encapsulate only the components that needs the state in this context
export const CounterProvider = ({children})=>{

    const [counter, setCounter] = useState(10);

    //Increase counter
    const increment = () => {
        return setCounter(counter + 1);
    }

    //Decrease counter
    const decrement = () => {
        return setCounter(counter - 1);
    }

    const [theme, setTheme] = useState("light");
    const  nextTheme = () => {
        setTheme((cur) => (cur === "light" ? "dark" : "light"))
    }

    return (
        <counterContext.Provider value={{counter, increment, decrement, theme, nextTheme}} >
            {children}
        </counterContext.Provider>
    )
}

export default counterContext;