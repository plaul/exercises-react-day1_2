import { useEffect, useState } from "react";

const SERVER_URL = "http://localhost:8000/users";


type User = { id: number; name: string };

async function fetchUser(userId: number): Promise<User> {
  return fetch(`${SERVER_URL}/${userId}?delay=3000`).then((response) => response.json());
}

export default function FetchDemo1() {
  const [userId, setUserId] = useState(1);
  const [userId2, setUserId2] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  fetch(`${SERVER_URL}/${userId}?delay=1000`)
    .then((response) => response.json())
    .then((response) => {
      setUser(response);
      console.log(response);
    });

  //If/When this leads to a null instead of loaded when rendered first time, it's one of
  //the "problems" with React 18 calling the effect twice
  //Verify via npm run build and then npm run preview
  useEffect(() => {
    console.log("useEffect called");
    const controller = new AbortController();

    setLoading(true);
    fetch(`${SERVER_URL}/${userId}?delay=3000`, { signal: controller.signal })
      .then((response) => response.json())
      .then((user) => setUser(user))
      .finally(() => setLoading(false));

    return () => {
      console.log("cleaning up");
      controller.abort();
    };
  }, [userId]);

  return (
    <>
      {loading ? <h3>Loading...</h3> : <p>{JSON.stringify(user)}</p>}
      {JSON.stringify(user)}
      <button onClick={() => setUserId((userId) => (userId + 1 <= 15 ? userId + 1 : 1))}>
        Next User
      </button>
      <button
        onClick={async () => {
          setUserId2((userId2) => (userId2 + 1 <= 15 ? userId2 + 1 : 1));
          const theUser = await fetchUser(userId2);
          setUser(theUser);
        }}
      >
        Next User (no Effect)
      </button>
    </>
  );
}
