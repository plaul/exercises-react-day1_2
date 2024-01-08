
type profileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};

export function Profile({ name, email, isActive,singleLine }: profileProps) {
   if (singleLine) {
     return <p>{name}, {email}, {isActive ? "Is Active": "Not Active"} </p>
    }
    else
    {
      return (
         <>
      <p style={{ fontWeight: "bold" }}>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Active: {isActive? "Yes" : "no"}</p>
      </>
      )
    }
}