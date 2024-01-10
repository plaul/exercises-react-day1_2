import { BaseProps } from "../types";
import { users as usersFromDB, User } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users, setUsers] = useState<User[]>(usersFromDB || []);

  const nextId =
    users?.length > 0
      ? 1 +
        users.reduce((max, user) => {
          //We need this check to make Typescript happy, since the type for User defines id as optional
          if (!user.id || !max) throw new Error();
          return user && user.id > max ? user.id : max;
        }, users[0].id || 0)
      : 1;

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
