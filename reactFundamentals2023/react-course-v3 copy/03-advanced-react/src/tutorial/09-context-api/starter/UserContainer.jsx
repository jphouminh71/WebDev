import { useAppContext } from "./Navbar";

export default function UserContainer() {
  const { user, logout } = useAppContext(); // Allows us to search for an existing parent context.

  return (
    <div className="user-container">
      {user ? (
        <div>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            {" "}
            logout{" "}
          </button>
        </div>
      ) : (
        <p> Please Login </p>
      )}
    </div>
  );
}
