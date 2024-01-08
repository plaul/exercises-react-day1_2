import { BaseProps } from "../types";
import { FormEvent } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData);
    const newUser: User = {
      id: -1, //Assume the id will be set by the parent component
      name: String(formEntries.name),
      email: String(formEntries.email),
      isActive: formEntries.isActive === "true",
    };
    onSubmitUser(newUser);
  };

  return (
    <>
      <h3 style={{margin:0}}>{title}</h3>
      <form onSubmit={onSubmit}>
        First Name: <input name="name" />
        Email: <input name="email" />
        Active: <input type="checkbox" name="isActive" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
