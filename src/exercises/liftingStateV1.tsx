import { BaseProps } from "../types";
import { User, users as usersDB } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";

export default function LiftingState({ title }: BaseProps) {
  const [users, setUsers] = useState(usersDB || []);

  const nextId =
    users.length > 0
      ? users.reduce(
          (max, user) => (user && user.id > max ? user.id : max),
          users[0]?.id
        ) + 1
      : 1;

  const addUser = (user: User) => {
    user.id = nextId;
    setUsers((prev) => [...prev, user]);
  };

  <h2>{title}</h2>;
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ textAlign: "center", border: "solid 1px gray", marginBottom: 10 }}>
          <h2>Root Component</h2>
          <p>This is where ALL the users live (Single Source of truth)</p>
          <p>User Count: {users.length}</p>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flex: 3, marginRight: 20, border: "solid 1px gray" }}>
            <UserTable users={users} />
          </div>
          <div style={{ flex: 2, border: "solid 1px gray", padding: 10 }}>
            <UserForm title="Add User" onSubmitUser={addUser} />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
