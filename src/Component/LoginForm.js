import { signIn, signOut } from "../Auth";

const LoginForm = ({ user, setUser }) => {
  const handleLogin = async () => {
    signIn(setUser);
  };

  const handleLogout = async () => {
    signOut(setUser);
  };

  return (
    <>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
};

export default LoginForm;
