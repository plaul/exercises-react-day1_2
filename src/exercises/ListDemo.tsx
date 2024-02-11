import { BaseProps } from "../types";
import { users } from "../data/data";
import UserTable from "../components/UserTable";
type Props = BaseProps;

export default function ListDemo({ title }: Props) {
  return (
    <>
      <div className="title">{title}</div>
      <div className="info">
        Simple exercise to demonstrate Rendering Lists and the mandatory use of keys
      </div>
      {/** Render all users in a table RIGHT HERE */}

      {/**After that refactor the table-part into a separate Component and use like this */}
      <UserTable users={users} />
    </>
  );
}
