import { useEffect, useState } from "react";
import { User } from "../data/data";
type UserTableProps = { users: User[]; editUser: (userId: number) => void };

export default function UserTableWithButtons({ users, editUser }: UserTableProps) {
  const [usersLocal, setUsersLocal] = useState<User[]>(users);
  const handleEditUser = (userId: number) => {
    editUser(userId);
  };

  useEffect(() => {
    setUsersLocal(users);
  }, [users]);

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
          {usersLocal.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>{user.isActive ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => handleEditUser(user.id||-1)}
                  className="btn btn-secondary btn-sm "
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
