import { BaseProps } from "../types";
import { users as usersFromDB, User } from "../data/data";
import { useState, FormEvent } from "react";
type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users] = useState<User[]>(usersFromDB || []);

  const nextId =
    1 + users.reduce((max, user) => (user.id > max ? user.id : max), users[0].id);

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData);
    const newUser: User = {
      id: nextId,
      name: String(formEntries.name),
      email: String(formEntries.email),
      isActive: formEntries.isActive === "true",
    };
    users.push(newUser);
    //setUsers([...users, newUser]);
    console.log(users.length);
  };

  return (
    <>
      <h2>{title}</h2>
      <table className="simple-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? "YES" : "NO"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={onsubmit}>
        First Name: <input name="name" />
        Email: <input name="email" />
        Active: <input type="checkbox" name="isActive" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
