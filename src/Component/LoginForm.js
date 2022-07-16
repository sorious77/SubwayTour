import { signIn, signOut } from "../Auth";

const LoginForm = ({ user, setUser }) => {
  const handleLogin = async () => {
    if (user) {
      signOut(setUser);
    } else {
      signIn(setUser);
    }
  };

  return (
    <div className="btn btn-light" onClick={handleLogin}>
      {user ? "Logout" : "Login"}
    </div>
  );
};

export default LoginForm;
