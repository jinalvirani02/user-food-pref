// pages/profile.js
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();  // Access session data and status
  console.log(session, "===session")

  // If session is loading
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // If no session is found
  if (!session) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
