import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");

  return (
    <div className="text-center m-8">
      <h1>Home</h1>
    </div>
  );
}
