"use server";
import { signIn, fetchAuthSession } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: "eu-south-1_DFqYNAryk",
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: "6fbhf2cgemm03gss69ip54afj6",
    },
  },
});

export const login = async (prevState: any, formData: FormData) => {
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
    const idToken = session?.tokens?.idToken?.toString();
    console.log("ggg idToken", idToken);
    return {
      message: "logged in successfully",
      idToken,
    };
  } catch (error) {
    console.log("error signing in", error);
    return {
      message: JSON.stringify(error),
      idToken: undefined,
    };
  }
};
