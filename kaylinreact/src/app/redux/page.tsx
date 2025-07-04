// app/components/Counter.tsx
"use client";

import { decrement, increment } from "@/lib/redux/features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";


export default function Counter() {
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






















// -> global state management ?
// --- have all the states in a centralized store, where update  is done in a single place
// --- helps to solve props drilling
// --- solves to avoid duplicate states


// -> what problems does redux solve?
// --- props drilling

// -> Store
// conatainer to keep all the redux states and functions together


// -> action and action type
// ---- js object, which describes a certaion change/task
// ---- action type is a string


// -> initialState
// defaiult state, which is used initially when store is created
// // {
// //     counter: 0
// // }

// -> reducer functions
// ---- takes in current state and update a new value



// -> redux slices.
// -> 


// {
//     counter: 0,
//     user: 'ram',
//     cartItems: ['hawkins' , 'baltra']
//     navItems: ['home', 'about'],
//     token: 'gheovudiqj21e3ke.fdsafq.fdsa',
//     featuredProduct: ['hawkins']
// }

//     {
//         user: {
//             name: 'ram',
//             token: 'gheovudiqj21e3ke.fdsafq.fdsa'
//         },
//         products: {
//             cartItems: ['hawkins' , 'baltra'],
//             featredProducts: ['hawkins']
//         },
//         nav: {
//             navItems: ['home', 'about']
//         }
//     }
