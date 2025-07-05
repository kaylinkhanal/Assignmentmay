    // app/counter/page.js
    "use client";
    import { useSelector, useDispatch } from 'react-redux';
   import {increment , decrement} from '@/lib/redux/features/counter/counterSlice'// Adjust path

    export default function CounterPage() {
      const count = useSelector((state) => state.counter.value);
      const dispatch = useDispatch();

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      );
    }