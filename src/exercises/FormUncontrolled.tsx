import UserForm from "../components/UserForm";
import { BaseProps } from "../types";
import { useState } from "react";
import { User } from "../data/data";

export default function FormUncontrolled({ title }: BaseProps) {
  const [submittedUser, setSubmittedUser] = useState<User | null>();

  const onSubmitUser = (newUser: User) => {
    setSubmittedUser(newUser);
  };

  return (
    <>
      <div className="info">
        Exercise to demonstrate how to handle forms the "traditional" JavaScript way
        <br />
        This{" "}
        <a href="https://www.youtube.com/watch?v=X2O7Wfmkuzw" target="_blank">
          small video
        </a>{" "}
        demonstrates how to handle forms using the two overall react strategies,
        Controlled and Uncontrolled Components
      </div>
      <div style={{ backgroundColor: "yellow", padding:10 }}>
        <h2>{title}</h2>
        <p>Observe how the result is liftet up to outer (yellow) component, when you press "Add User" </p>
        <div style={{ backgroundColor: "lightblue", margin: 10,padding:5 }}>
          <UserForm title="User Form Uncontrolled" onSubmitUser={onSubmitUser} />
        </div>
        <p>{JSON.stringify(submittedUser)}</p>
      </div>
    </>
  );
}
