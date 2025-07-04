// app/store/redux-provider.tsx
"use client";

import { Provider } from "react-redux";
import { store } from "./store"; // Adjust path as needed

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
