"use client";
import { useFormState } from "react-dom";
import { login } from "../actions";
import { SubmitButton } from "../components/SubmitButton";
import CopyToClipboardButton from "../components/CopyToClipboardButton";
import { useAuth } from "../components/AuthContext";

const initialState = {
  message: "",
  idToken: undefined,
};

export default function Login() {
  const [state, formAction] = useFormState(login, initialState);
  const { user, setUser } = useAuth();
  if (state.user) {
    setUser(state.user);
  }
  console.log("user: ", user);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="bg-white p-8 sm:mx-auto sm:w-full sm:max-w-2xl rounded-lg">
        <div>
          <h2 className="font-semibold tracking-[3px] text-xl px-6 text-center">
            Meedox
          </h2>
          <h2 className="mt-8 text-center text-lg leading-9 tracking-tight text-gray-900">
            Accedi al tuo account
          </h2>
        </div>
        <div className="mt-4">
          <form className="space-y-4" action={formAction}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-2">
              <SubmitButton title="Sign in" />
            </div>
          </form>
          {state?.message || user?.token ? (
            <div className="text-sm text-gray-900 mt-2">
              <p className="mb-2">{state.message}</p>
              {user?.token ? (
                <>
                  <p className="break-words mb-2">
                    <span className="text-blue-600 block">idToken:</span>
                    <span>{user?.token}</span>
                  </p>
                  <CopyToClipboardButton textToCopy={user?.token} />
                </>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
