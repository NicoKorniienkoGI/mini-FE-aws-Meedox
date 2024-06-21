"use client";

import { Amplify } from "aws-amplify";

Amplify.configure(
  {
    Auth: {
      Cognito: {
        //  Amazon Cognito User Pool ID
        userPoolId: process.env.USER_POOL_ID || "",
        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolClientId: process.env.USER_POOL_CLIENT_ID || "",
      },
    },
  },
  { ssr: true }
);

export default function ConfigureAmplifyClientSide() {
  return null;
}
