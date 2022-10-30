import React, {useState, useCallback} from 'react'

type ButtonProps = {
    onClick: () => void
}

// 通常の関数コンポーネント
const DecrementButton = (props: ButtonProps) => {
    const {onClick} = props

    console.log("DecrementButtonが再描画されました")

    return <button onClick={onClick}>Decrement</button>
}

// メモ化した関数コンポーネント
const IncrementButton = React.memo((props: ButtonProps) => {
    const {onClick} = props

    console.log("IncrementButtonが再描画されました")

    return <button onClick={onClick}>Increment</button>
})

// メモ化した関数コンポーネント
const DoubleButton = React.memo((props: ButtonProps)=>{
    const {onClick} = props

    console.log("DoubleButtonが再描画されました")

    return <button onClick={onClick}>Double</button>
})

const Parent = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((count)=>count-1)
    }

    const increment = () => {
        setCount((count)=>count+1)
    }

    const double = useCallback(()=>{
        setCount((c)=>c*2)
    },[])

    return(
        <div>
            <p>Count: {count}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    )
}

export default Parent