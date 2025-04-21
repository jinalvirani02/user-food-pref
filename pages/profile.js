// pages/profile.js
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Profile() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("here", typeof window)
    if (session?.user && typeof window !== "undefined") {
      const { email, id, first_name, last_name, name } = session.user;

      let retries = 0;
      const maxRetries = 10;

      const tryIdentify = () => {
        console.log("here")
        if (typeof window.jstag !== "undefined") {
          window.jstag.identify({
            email,
            user_id: id,
            first_name: first_name || name?.split(" ")[0] || "",
            last_name: last_name || name?.split(" ")[1] || "",
          });
          console.log("[Lytics] User identified:", email);
        } else if (retries < maxRetries) {
          retries++;
          setTimeout(tryIdentify, 300); // Retry after 300ms
        } else {
          console.warn("[Lytics] jstag not available after retries");
        }
      };

      tryIdentify();
    }
  }, [session]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

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
