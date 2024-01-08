import { useState, ChangeEvent } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";

export default function StateDemo2({ title }: BaseProps) {
  const [user,setUser] = useState<User>({
    id: 1,
    name: "Max Power",
    email: "max.power@email.com",
    isActive: true,
  });

  // function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
  //   user.name = e.target.value;
  // }
  console.log(user);
  //Solution
  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setUser((prev) => ({ ...prev, name: e.target.value }));
  }

  return (
    <>
      <h2>{title}</h2>
      <div>
        <p>ID: {user.id}</p>{" "}
      </div>
      First Name: <input name="name" onChange={handleNameChange} />
      Email: <input name="email" value={user.email} />
      Active: <input type="checkbox" checked={user.isActive} name="isActive" />
      <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
    </>
  );
}
