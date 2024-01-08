import { BaseProps } from "../types";
import { User, users as usersDB } from "../data/data";
import { useState } from "react";
import UserTableWithButtons from "../components/UserTableWithButtons";
import UserFormControlled from "../components/userFormControlled";
import { useHeaderContext } from "../components/headerProvider";

export default function LiftingState({ title }: BaseProps) {
  const [users, setUsers] = useState(usersDB || []);
  const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);
  const { setSubTitle } = useHeaderContext();
  setSubTitle(title);

  //Calculate the next id
  const nextId =
    users.length > 0
      ? users.reduce(
          (max, user) => (user && user.id > max ? user.id : max),
          users[0]?.id
        ) + 1
      : 1;

  const addEditUser = (user: User) => {
    if (user.id === -1) {
      user.id = nextId;
      setUsers((prev) => [...prev, user]);
    } else {
      setUsers((prev) =>
        prev.map((existingUser) => (existingUser.id === user.id ? user : existingUser))
      );
    }
  };

  const editUser = (id: number) => {
    const user = users.find((u) => u.id === id);
    setUserToEdit(user);
  };

  <h2>{title}</h2>;
  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          style={{
            textAlign: "center",
            border: "solid 1px gray",
            marginBottom: 10,
          }}
        >
          <h2>Root Component</h2>
          <p>This is where ALL the users live (Single Source of truth)</p>
          <p>User Count: {users.length}</p>
          <p>User To Edit: {JSON.stringify(userToEdit)}</p>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flex: 3, marginRight: 20, border: "solid 1px gray" }}>
            <UserTableWithButtons users={users} editUser={editUser} />
          </div>
          <div style={{ flex: 2, border: "solid 1px gray", padding: 10 }}>
            <UserFormControlled
              title="Add User"
              onSubmitUser={addEditUser}
              defaultUser={userToEdit}
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
