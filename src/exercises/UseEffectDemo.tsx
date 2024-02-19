import { useEffect, useState } from "react";
import { BaseProps } from "../types";

/*
Exercise 
part one --> provide the useEffect without a dependency array and clearInterval and see what happens
part two --> provide the useEffect with an empty dependency array and see what happens
part three --> add an return function  to clear the interval ()
part four --> Add a button to start and stop the interval via a boolean state variable to see what happens with values in the dependency array
*/

//let currentValue = 0; //This should demo that an import only happens once

export default function UseEffectDemo({ title }: BaseProps) {
  const [count, setCount] = useState(0);
  const [shouldCount, setShouldCount] = useState(false);

  useEffect(() => {
    if (!shouldCount) return;
    const i = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(i);
  }, [shouldCount]);

  return (
    <>
      <div className="title">{title}</div>
      <div className="info">
        Exercise that demonstrates how to use the <b>useEffect hook</b>,  without a dependency array (rarely used), with an empty dependency array, with a non-empty dependency array and how to use the cleanup function
      </div>
  
      <p>{count}</p>
      <button onClick={() => setShouldCount((prev) => !prev)}>
        {shouldCount ? "Stop Count" : "Start Count"}
      </button>

    </>
  );
}
