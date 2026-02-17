import { useState } from "react";
export default function Set(){

    const [result, setResult] = useState(0) ;

    const addHander = () => {
        setResult(result + 1)
    }
    const subtractHander = () => {
        let newResult = result - 1;
        setResult(newResult);
        if(newResult < 0){
            setResult(0)
            alert("Result cannot be negative")
        }
    }

    const multiplyHander = () => {
        setResult(result * 2)
    }
    const divideHander = () => {
        setResult(result / 2)
    }
    const resetHander = () => {
        setResult(0)
    }
    return(
        <div className="task">
            <h1>Task one</h1>
            <h2>Result : {result}</h2>
            <div className="taskModel">
                <button onClick={addHander}>Add</button>
                <button onClick={subtractHander}>Subtract</button>
                <button onClick={multiplyHander}>Multiply</button>
                <button onClick={divideHander}>Divide</button>
                <button onClick={resetHander}>Reset</button>
            </div>
        </div>
    )
}