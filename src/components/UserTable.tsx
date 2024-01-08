import { User } from "../data/data";
type UserTableProps = { users: User[] };

export default function UserTable({ users }: UserTableProps) {
  return (
    <>
      <table className="simple-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>{user.isActive ? "Yes" : "No"}</td>
              <td>
                <button className="btn btn-secondary btn-sm ">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
