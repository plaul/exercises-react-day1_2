import { BaseProps } from "../types";
import { users } from "../data/data";
import { Profile } from "../components/Profile";

export default function ListDemo2({ title }: BaseProps) {
  return (
    <>
      <h2>{title}</h2>
      {users.map((user) => (
        <Profile
          key={user.id}
          name={user.name}
          email={user.email}
          isActive={user.isActive}
          singleLine={true}
        />
      ))}
    </>
  );
}
