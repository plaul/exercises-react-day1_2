
import { BaseProps } from "../types";
import { useState } from "react";

export default function StateDemo1({ title }: BaseProps) {
  const [count, setCount] = useState(0);
  
  /*
  const [count, setCount] = useState(() => {
    const savedCount = sessionStorage.getItem("count");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    // Load the count from local storage when the component mounts
    const savedCount = sessionStorage.getItem("count");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  useEffect(() => {
    // Save the count to local storage whenever it changes
    sessionStorage.setItem("count", ""+count);
  }, [count]);
*/
  return (
    <>
      <h2>{title}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}> Decrement</button>
      <h3>{count}</h3>
    </>
  );
}
