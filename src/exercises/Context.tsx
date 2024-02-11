/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, SetStateAction } from "react";
import { BaseProps } from "../types";

interface RoleContextType {
  role: string;
  setRole: React.Dispatch<SetStateAction<string>>;
}
const topWidth = 220;
const RoleContext = createContext<RoleContextType>({ role: "", setRole: () => {} });
//const RoleContext = createContext(null);

function RoleContextProvider({ children }: BaseProps) {
  const [role, setRole] = useState("anonymous");
  return (
    <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
  );
}

export default function ContextDemoApp({ title }: BaseProps) {
  return (
    <RoleContextProvider title={title}>
      <Root />
    </RoleContextProvider>
  );
}

function Root() {
  // const { role } = useContext(RoleContext);
  return (
    <div className="root-box">
      <h2>Root</h2>
      {/* <p>Role: {role}</p> */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <A />
        <D />
      </div>
    </div>
  );
}

function A() {
  //const role = useContext(RoleContext); // Using useContext to access the theme
  return (
    <div className="box" style={{ width: topWidth }}>
      <h2>A</h2>
      <B />
    </div>
  );
}

function B() {
  const { role } = useContext(RoleContext);
  return (
    <div className="box" style={{ width: topWidth - 20 }}>
      <h2>B</h2>
      <p>Role: {role}</p>
      <C />
    </div>
  );
}

function C() {
  return (
    <div className="box" style={{ width: topWidth - 40 }}>
      <h2>C</h2>
    </div>
  );
}

function D() {
  const { role, setRole } = useContext(RoleContext); // Using useContext to access the theme
  return (
    <div className="box" style={{ width: topWidth }}>
      <h2 style={{ margin: 0 }}>D</h2>
      <p style={{ margin: 0 }}>Simulates a login that provides a role</p>
      <select defaultValue={role} onChange={(evt) => setRole(evt.target.value)}>
        <option value="anonymous">anonymous</option>
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <E />
    </div>
  );
}

function E() {
  return (
    <div className="box" style={{ width: topWidth - 20 }}>
      <h2>E</h2>
      <F />
    </div>
  );
}

function F() {
  const { role } = useContext(RoleContext);
  return (
    <div className="box" style={{ width: topWidth - 40 }}>
      <h2>F</h2>
      <p>Role: {role}</p>
    </div>
  );
}
