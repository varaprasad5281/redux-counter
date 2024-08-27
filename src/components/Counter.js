import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/CounterSlice';

const Counter = () => {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <div className="btn">
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default Counter;