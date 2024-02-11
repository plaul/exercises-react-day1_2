import { BaseProps } from "../types";
import {getUsers,addEditUser as addEdit,deleteUser,getUser, User  } from "../data/dataFetcher";
import { useEffect, useState } from "react";
import UserTableWithButtons from "../components/UserTableWithButtons";
import UserFormControlled, {AddEditDeleteFunction} from "../components/userFormControlled";

export default function LiftingStateRemote({ title }: BaseProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, [users]);

  //Calculate the next id

  const addEditUser:AddEditDeleteFunction = async (user,isDelete) => {
    if(isDelete){
      await deleteUser(user.id);
    }
    else{
      await addEdit(user);
    }
    //To re-render the table
    console.log("Re-render");
    getUsers().then((users) => setUsers(users)); 
  };

  const editUser = async (id: number) => {
    const user = await getUser(id);
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
            {users.length>0 ?
            <UserTableWithButtons users={users} editUser={editUser} />
            : <p>Loading...</p>}
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
