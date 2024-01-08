
import { BaseProps } from "../types";
import { FormEvent, useState, useEffect, ChangeEvent } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
  defaultUser: User | undefined;
};

export default function UserFormControlled({
  title,
  onSubmitUser,
  defaultUser,
}: UserFormProps) {
  const [user, setUser] = useState<User>({
    id: -1,
    name: "",
    email: "",
    isActive: false,
  });

  useEffect(() => {
    if (defaultUser) {
      setUser(defaultUser);
    } else {
      // Reset to initial state if defaultUser is undefined
      setUser({ id: -1, name: "", email: "", isActive: false });
    }
  }, [defaultUser]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUser(user);
    setUser({ id: -1, name: "", email: "", isActive: false });
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name: <input name="name" onChange={handleChange} value={user.name} />
        <br />
        Email: <input name="email" onChange={handleChange} value={user.email} />
        <br />
        Active:
        <input
          type="checkbox"
          name="isActive"
          onChange={handleChange}
          checked={user.isActive}
        />
        <br />
        <button>{user.id == -1 ? "Add User" : "Update User"}</button>
        <p style={{ fontSize: "small" }}>{JSON.stringify(user)}</p>
      </form>
    </>
  );
}
