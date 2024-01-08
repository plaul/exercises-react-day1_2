
import { BaseProps } from "../types";
import { users as usersFromDB, User } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users,setUsers] = useState<User[]>(usersFromDB || []);

  const nextId =
    1 + users.reduce((max, user) => (user.id > max ? user.id : max), users[0].id);

  const onSubmitUser = (newUser: User) => {
    newUser.id = nextId;
    //This is the only place you have to do something
    //users.push(newUser);
    setUsers((prev) => [...prev, newUser]);
    console.log(users);
  };

  return (
    <>
      <h2>{title}</h2>
      <UserTable users={users} />
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
    </>
  );
}
