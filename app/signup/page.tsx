import { signUp } from "aws-amplify/auth";

export default async function Login() {
  const register = async (formData: FormData) => {
    "use server";
    const email = formData.get("username") as string;
    const password = formData.get("password") as string;
    try {
      const user = await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            "custom:role_id": "3",
          },
        },
      });
      console.log("sign up successful", user);
    } catch (error) {
      console.log("error signing up", error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="bg-white p-8 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg">
        <div>
          <h2 className="font-semibold tracking-[3px] text-xl px-6 text-center">
            Meedox
          </h2>
          <h2 className="mt-8 text-center text-lg leading-9 tracking-tight text-gray-900">
            Crea il tuo account
          </h2>
        </div>
        <div className="mt-4">
          <form className="space-y-4" action={register}>
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

            <div>
              <button
                type="submit"
                className="flex w-full bg-gray-300 justify-center rounded-md bg-blue2 hover:bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
