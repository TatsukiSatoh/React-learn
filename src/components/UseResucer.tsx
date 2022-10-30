import { useReducer } from "react";

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET"

const reducer = (currentNumber: number, action: Action)=>{
    switch(action){
        case "DECREMENT":
            return currentNumber - 1
        case "INCREMENT":
            return currentNumber + 1
        case "DOUBLE":
            return currentNumber * 2
        case "RESET":
            return currentNumber = 0
        default:
            return currentNumber
    }
}

type CounterProps = {
    initialValue: number
}

const Counter = (props: CounterProps) => {
    const {initialValue} = props
    // useReducer : 第一引数: reducer関数, 第二引数: 初期値
    const [counter, dispatch] = useReducer(reducer,initialValue)

    return (
        <div>
            <p>{counter}</p>
            <button onClick={()=>dispatch("DECREMENT")}>-</button>
            <button onClick={()=>dispatch("INCREMENT")}>+</button>
            <button onClick={()=>dispatch("DOUBLE")}>×2</button>
            <button onClick={()=>dispatch("RESET")}>reset</button>
        </div>
    )
}

export default Counter