import { BaseProps } from "../types";
import { Profile } from "../components/Profile";
import { useState } from "react";

/*
typescript props
props
conditional rendering
*/

export default function Propsdemo1({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <div className="title">{title}</div>
      <div className="info">
        Simple exercise to demonstrates how to use props, and props with Typescript
      </div>
      Direction:{" "}
      <input
        type="checkbox"
        checked={showHorizontal}
        onChange={() => setShowHorizontal(!showHorizontal)}
      />
      <Profile
        name="Max Power"
        email="mp@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Rusty Mails"
        email="rm@email.com"
        isActive={false}
        singleLine={showHorizontal}
      />
      <Profile
        name="Ella Vator"
        email="ev@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
    </>
  );
}
