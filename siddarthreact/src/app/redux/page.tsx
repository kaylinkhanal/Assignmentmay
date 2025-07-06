'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../lib/redux/features/counter/counterSlice';

export default function CounterPage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}