import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { AuthProvider } from "../context/Auth";
import { Toaster } from "react-hot-toast";
import { Metadata } from "../components/page/MetaData";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, pageProps } }) {
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <AuthProvider>
        <Layout>
          <Metadata />
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    );
  }
}

export default appWithTranslation(MyApp);
