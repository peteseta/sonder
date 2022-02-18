import "../styles/globals.css";
import { useEffect, useState, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  // checks for window width and sets state accordingly for toast position
  const [small, setSmall] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setSmall(true);
    } else {
      setSmall(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 640px)`);
    media.addEventListener("change", (e) => updateTarget(e));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setSmall(true);
    }

    return () => media.removeEventListener("change", (e) => updateTarget(e));
  }, []);

  const paddingRight = small ? 0 : 50;
  const paddingLeft = small ? 0 : 0;

  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Poppins:wght@700&display=swap');
        </style>
      </Head>

      <Toaster
        position={small ? "bottom-center" : "top-right"}
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            border: "2px solid #171717",
            background: "black",
            padding: "25px",
            color: "#f5f5f5",
          },
          success: {
            iconTheme: {
              primary: "#000000",
              secondary: "#f5f5f5",
            },
          },
          error: {
            iconTheme: {
              primary: "#000000",
              secondary: "#f5f5f5",
            },
          },
          loading: {
            iconTheme: {
              primary: "#000000",
              secondary: "#f5f5f5",
            },
          },
        }}
        containerStyle={{
          top: 50,
          bottom: 20,
          right: paddingRight,
          left: paddingLeft,
        }}
      />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
