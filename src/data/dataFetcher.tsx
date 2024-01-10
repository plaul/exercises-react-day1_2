const SERVER_URL = "http://localhost:8000/users";
const DELAY = 1000;
const CACHE_EXPIRATION_MS = 300000;
const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export interface User {
  id?: number; //ID not required when adding a new user
  name: string;
  email: string;
  isActive: boolean;
}
let users: User[] = [];
let lastFetchTimestamp: number|null = null; // Timestamp of the last fetch

function fetchApi(url: string, options: object): Promise<any> {
  return fetch(url, options).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

function makeOptions(method: string, body?: object) {
  const opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    ...(body && { body: JSON.stringify(body) }), // Simplified object spread
  };
  return opts;
}

export const addEditUser = async (user: User): Promise<User> => {
  const method = user.id  ? HTTP_METHODS.PUT : HTTP_METHODS.POST;
  const userId = user.id  ? `/${user.id}` : "";
  const options = makeOptions(method, user);

  const result = await fetchApi(`${SERVER_URL}${userId}?delay=${DELAY}`, options);
  users =
    user.id  ? users.map((u) => (u.id === user.id ? result : u)) : [...users, result];
  return result;
};

export const getUser = async (id: number): Promise<User> => {
  const options = makeOptions(HTTP_METHODS.GET);
  await initializeUsers(options);
  return users.find((user) => user.id === id)!;
};

export const getUsers = async (): Promise<User[]> => {
  const options = makeOptions(HTTP_METHODS.GET);
  await initializeUsers(options);
  return users;
};

export const deleteUser = async (id: number|undefined): Promise<void> => {
  if(!id) throw new Error("Id is undefined");
  const options = makeOptions(HTTP_METHODS.DELETE);
  await fetchApi(`${SERVER_URL}/${id}?delay=${DELAY}`, options);
  users = users.filter((user) => user.id !== id);
};

const initializeUsers = async (options: object) => {
  const now = Date.now();
  const shouldFetch =
    lastFetchTimestamp === null || now - lastFetchTimestamp > CACHE_EXPIRATION_MS;
  if (users.length === 0 || shouldFetch) {
    users = await fetchApi(`${SERVER_URL}?delay=${DELAY}`, options);
    lastFetchTimestamp = now; // Update the timestamp after fetching
  }
};

// const SERVER_URL = "http://localhost:8000/users";

// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// }
// let users: User[] = [];

// const DELAY = 1000;

// function fetchAll(options: object): Promise<User[]> {
//   return fetch(`${SERVER_URL}?delay=${DELAY}`, options).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   });
// }

// function fetchOne(options: object, id: number | null): Promise<User> {
//   const URL = id ? `${SERVER_URL}/${id}?delay=${DELAY}` : `${SERVER_URL}?delay=${DELAY}`;
//   return fetch(URL, options).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   });
// }

// export const addEditUser = async (user: User): Promise<User> => {
//   const method = user.id > -1 ? "PUT" : "POST";
//   if (method === "POST") delete user.id;
//   const options = makeOptions(method, user);
//   const userId = user.id > -1 ? user.id : null;

//   const result = await fetchOne(options, userId);
//   if (users.length === 0) {
//     users = await fetchAll(options);
//   } else if (user.id > -1) {
//     //It's an edit
//     console.log("Edit");
//     users = users.map((u) => (u.id === user.id ? user : u));
//   } else {
//     console.log("Add");
//     users = [...users, result];
//   }
//   return result;
// };

// export const getUser = async (id: number): Promise<User> => {
//   const options = makeOptions("GET");

//   if (users.length === 0) {
//     users = await fetchAll(options);
//   }
//   return users.find((user) => user.id === id)!;
// };

// export const getUsers = async (): Promise<User[]> => {
//   const options = makeOptions("GET");
//   if (users.length == 0) {
//     users = await fetchAll(options);
//   }
//   return users;
// };
// export const deleteUser = async (id: number): void => {
//   const options = makeOptions("DELETE");
//   await fetchOne(options, id);
//   if (users.length > 0) {
//     users = users.filter((user) => user.id !== id);
//   } else {
//     users = await fetchAll(options);
//   }
// };

// function makeOptions(method: string, body?: object) {
//   const opts = {
//     method: method,
//     headers: {
//       "Content-type": "application/json",
//       Accept: "application/json",
//     },
//   };
//   if (body) {
//     //Observe how we can add new fields to an object when needed
//     opts.body = JSON.stringify(body);
//   }
//   return opts;
// }
