import { useState } from "react"
const Counter = () => {
    const [countValue, setCountValue] = useState(0)
    const addOneToCounter=()=>{
        setCountValue(countValue+1)
    }
    const subtractOneToCounter=()=>{
        setCountValue(countValue-1)
    }
    return (
        <div className='container'>
            <h2 data-testid="header">Count: {countValue}</h2>
            <button data-testid="subtract-one-btn" className='btn' onClick={subtractOneToCounter}>-1</button>
            <button data-testid="add-one-btn" className='btn' onClick={addOneToCounter} >+1</button>
        </div>
    )
}

export default Counter
