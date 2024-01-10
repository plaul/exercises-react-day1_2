import { useAsyncFunction } from "./useAsyncFunction";
import { User } from "../data/data";
import { useCallback } from "react";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 1000;

function fetchUser(userId: number, options?: object): Promise<User> {
  return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options)
  .then((res) =>{
    if(!res.ok){
      throw new Error(res.statusText);
    }
    return res.json()
  });
}

const emptyUser: User = { name: "", email: "", isActive: false };


export function useUser(id: number) {
  /* useCallback is used to memoize the function
    Every time useAsyncFunction is called, it creates a new instance of asyncFunction. 
    Functions in JavaScript are objects, so each instance of asyncFunction is unique, 
    even if the logic inside the function doesn't change. 
    This will cause the useEffect hook to treat each instance of asyncFunction as a new dependency 
    and triggers the effect on every render
    This is prevented my memorizing the function with useCallback
  */
  const fetchFunction = useCallback(() => {
    return fetchUser(id);
  }, [id]);

  const [user, error, isPending] = useAsyncFunction(fetchFunction, emptyUser);
  return { user, error, isPending };
}
