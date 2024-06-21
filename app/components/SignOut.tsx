"use client";
import { signOut } from "aws-amplify/auth";

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <button
      onClick={handleSignOut}
      className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
    >
      Log Out
    </button>
  );
};

export default SignOut;
