import { useEffect, useState } from "react";
import { BaseProps } from "../types";
const SERVER_URL = "http://localhost:8000/users";

type User = { id: number; name: string };

const DELAY = 1000;

//Utility function to fetch a user from the server
async function fetchUser(userId: number, options?: object): Promise<User> {
  return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((response) =>
    response.json()
  );
}

export default function FetchDemo1({ title }: BaseProps) {
  const [userId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  //Use this to fetch the next user when the "Next User" button is clicked
  //Make sure you understand why we don't need useEffect here
  const fetchNextUser = async () => {
    const nextUser = Math.floor(Math.random() * 15) + 1; //There are 15 users in the DB
    console.log("fetchNextUser called", nextUser);
    //Do not set call setUserId here it will cause an extra render
    setLoading(true);
    const theUser = await fetchUser(nextUser);
    setLoading(false);
    setUser(theUser);
  };

  //Call fetchUser immediately when the component is mounted
  // fetchUser(userId).then((response) => {
  //   setUser(response);
  //   console.log(response);
  // });

  //If/When this leads to a null instead of loaded when rendered first time, it's one of
  //the "problems" with React 18 calling the effect twice
  //Verify via npm run build and then npm run preview
  useEffect(() => {
    console.log("useEffect called");
    const controller = new AbortController();
    setLoading(true);
    fetchUser(userId, { signal: controller.signal })
      .then((user) => {
        setLoading(false);
        setUser(user);
      })
      .catch(() => alert("Could not fetch, is the API-server running?"))
      .finally(() => setLoading(false));
    return () => {
      console.log("cleaning up");
      controller.abort();
    };
  }, [userId]);

  return (
    <>
      <h2>{title}</h2>
      <p style={{ fontStyle: "italic" }}>
        This part requires the server mentioned in the exercise. The URL used on this
        deployed version still points to localhost, so if you start the SERVER_URL as
        explained in the exercise, it will work
      </p>
      <button onClick={fetchNextUser}>Next User</button>
      {loading ? <h3>Loading...</h3> : <p>{JSON.stringify(user)}</p>}
      {/* {user && JSON.stringify(user)} */}
      <br />
    </>
  );
}
