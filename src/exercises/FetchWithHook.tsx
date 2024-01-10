import { useUser } from "../hooks/UseUser";
import { BaseProps } from "../types";
export default function FetchWithHook({ title }: BaseProps) {
  const { user, error, isPending } = useUser(1);

  return (
    <>
      <h2>{title}</h2>
      {error && <pre>ERROR! {error}...</pre>}
      {isPending && <pre>LOADING...</pre>}
      <pre>{!isPending && !error && JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
