import Link from "next/link";
import { getCurrentUser } from "aws-amplify/auth";
import SignOut from "./SignOut";

const Header = async () => {
  let username;
  try {
    username = await getCurrentUser();
  } catch (e) {}

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8">
        <div>{username ? `Hello, ${username}` : "No User logged in"}</div>
        <div className="flex items-center justify-center gap-6">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
          >
            Sign Up
          </Link>
        </div>
        <SignOut />
      </nav>
    </header>
  );
};

export default Header;
