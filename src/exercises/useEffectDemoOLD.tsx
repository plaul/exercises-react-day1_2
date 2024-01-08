import { useEffect, useState } from "react";
//import { useHeaderContext } from "../components/headerProvider";

type Props = { title: string };

/*
Exercise 
part one --> provide the useEffect without a dependency array and clearInterval and see what happens
part two --> provide the useEffect with an empty dependency array and see what happens
part three --> add an return function  to clear the interval ()
part four --> Add a button to start and stop the interval via a boolean state variable to see what happens with values in the dependency array
*/

//let currentValue = 0; //This should demo that an import only happens once

export default function UseEffectDemo({ title }: Props) {
  const [count, setCount] = useState(0);
  const [shouldCount, setShouldCount] = useState(false);

  useEffect(() => {
    //if (shouldCount) {
    //const int = 
    setInterval(() => {
      //setCount(count + 1);
      setCount((prev) => {
        //return (currentValue = prev + 1);
        return prev + 1;
      });
    }, 1000);

    // return () => {
    //   clearInterval(int);
    // };
    //}
  }, []);

  return (
    <>
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={() => setShouldCount((prev) => !prev)}>
        {shouldCount ? "Stop Count" : "Start Count"}
      </button>
    </>
  );
}
