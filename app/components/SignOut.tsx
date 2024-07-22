"use client";
import { logout } from "../actions";
import { useAuth } from "./AuthContext";

const SignOut = () => {
  const { user, setUser } = useAuth();

  const handleSignOut = async () => {
    const response = await logout();
    if (response.success) {
      setUser(null);
    }
  };
  return (
    <>
      {!user ? (
        <div></div>
      ) : (
        <button
          onClick={handleSignOut}
          className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
        >
          Log Out
        </button>
      )}
    </>
  );
};

export default SignOut;
