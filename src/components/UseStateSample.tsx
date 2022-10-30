import { useState } from "react"

type CounterProps = {
    initialValue: number
}

const Counter = (props:CounterProps):JSX.Element => {
    const {initialValue} = props
    const [counter, setCounter] = useState(initialValue)

    return(
        <div>
            <p>{counter}</p>
            <button onClick={()=>setCounter(counter-1)}> - </button>
            <button onClick={()=>setCounter(counter+1)}> + </button>
        </div>
    )
}

export default Counter