// useInterval hook takes two arguments: callback, a function and delay (number of ms inteval between each function call)
// if calback function changes, latest callback function is used, if delay value changes, latest value is used,
// if delay is  or becomesnull, undefined, callback function will stop being called

import { useEffect, useRef } from "react";


export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
