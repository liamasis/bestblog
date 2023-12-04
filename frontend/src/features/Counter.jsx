import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from '../store'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterSlice'

export function Counter() {
    const count = useSelector(selectCount)
    console.log(count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0

    return (
        <div>
            <div>
                <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
                    Decrement value
                </button>
                <span>{count}</span>
                <button aria-label='increment' onClick={() => dispatch(increment())}>
                    increment
                </button>
                <input type="value" onChange={e => setIncrementAmount(e.target.value)} />
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
                    Increment by thing
                </button>
                <button onClick={() => dispatch(incrementAsync(incrementValue))}>

                </button>
            </div>
        </div>
    )

}

export default Counter