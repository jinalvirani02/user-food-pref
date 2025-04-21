import { SessionProvider } from "next-auth/react";  // Import SessionProvider

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>  {/* Wrap the app in SessionProvider */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;