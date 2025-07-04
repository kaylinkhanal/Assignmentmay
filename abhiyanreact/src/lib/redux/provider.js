    // components/ReduxProvider.js
    "use client"; // Mark this as a client component

    import { Provider } from 'react-redux';
    import { makeStore } from './store';
    import { useRef } from 'react';

    export default function ReduxProvider({ children }) {
      const storeRef = useRef();
      if (!storeRef.current) {
        // Create the store instance once per request
        storeRef.current = makeStore();
      }

      return <Provider store={storeRef.current}>{children}</Provider>;
    }