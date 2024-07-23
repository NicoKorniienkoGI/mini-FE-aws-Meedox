"use client";
import Link from "next/link";
import SignOut from "./SignOut";
import { useAuth } from "./AuthContext";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Login",
    path: "/login",
  },
  {
    label: "Sign Up",
    path: "/signup",
  },
];

const Header = () => {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8">
        <div>
          {user ? (
            <>
              Hello, <span className="text-blue-600">{user.username}</span>
            </>
          ) : (
            "No User logged in"
          )}
        </div>
        <div className="flex items-center justify-center gap-6">
          {links.map((link) =>
            pathname === link.path ? (
              <div
                key={link.path}
                className="text-sm font-semibold leading-6 text-blue-600"
              >
                {link.label}
              </div>
            ) : (
              <Link
                key={link.path}
                href={link.path}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
        <SignOut />
      </nav>
    </header>
  );
};

export default Header;
