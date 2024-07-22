import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
// import { Amplify } from "aws-amplify";
import { AuthProvider } from "./components/AuthContext";

// Amplify.configure(
//   {
//     Auth: {
//       Cognito: {
//         //  Amazon Cognito User Pool ID
//         userPoolId: process.env.USER_POOL_ID || "",
//         // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//         userPoolClientId: process.env.USER_POOL_CLIENT_ID || "",
//       },
//     },
//   },
//   { ssr: true }
// );

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meedox login app",
  description: "Generated by create next app and Amplify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen">
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
