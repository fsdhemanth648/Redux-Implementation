import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increament, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='nav-center'>
      <div className='nav-container' style={{ background: '#f4de45' }}>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increament())}
          style={{
            margin: '5px',
            padding: '5px'
          }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
          style={{
            margin: '5px',
            padding: '5px'
          }}
        >
          Decrement
        </button>
        <b>It is a simple example of Redux Toolkit documentation.</b>
        <div>
          <p> --* On Clicking the Increment button it value is increased by one.</p>
          <p> --* On Clicking the Decrement button it value is decreased by one.</p>
        </div>
      </div>

    </div>
  )
}

export default Counter
