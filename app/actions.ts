"use server";
import { signIn, fetchAuthSession, signOut } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: process.env.USER_POOL_ID || "",
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: process.env.USER_POOL_CLIENT_ID || "",
    },
  },
});

export const login = async (_prevState: any, formData: FormData) => {
  "use server";
  const email = formData.get("username") as string;
  const password = formData.get("password") as string;
  try {
    const user = await signIn({
      username: email,
      password,
    });
    console.log("ggg sign in successful", user);
    const session = await fetchAuthSession();
    console.log("ggg session: ", session);
    const idToken = session?.tokens?.idToken?.toString() || "";
    console.log("ggg idToken", idToken);
    cookies().set("token", idToken);
    cookies().set("username", email);
    return {
      message: "logged in successfully",
      user: { username: email, token: idToken },
    };
  } catch (error) {
    console.log("error signing in", error);
    return {
      message: JSON.stringify(error),
      idToken: undefined,
    };
  }
};

export const logout = async () => {
  "use server";
  try {
    await signOut();
    cookies().delete("token");
    cookies().delete("username");
    return {
      success: true,
      message: "logged out successfully",
    };
  } catch (error) {
    console.log("error logging out", error);
    return {
      message: JSON.stringify(error),
    };
  }
};

export const check = async () => {
  const token = cookies().get("token")?.value;
  const username = cookies().get("username")?.value;

  if (!token || !username) {
    return { user: null };
  }

  return { user: { username, token } };
};
