import "../styles/globals.css";
import Head from "next/head";
import { useEffect, useState, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  // checks for window width and sets state accordingly for toast position
  const [small, setSmall] = useState(false);
  const [instagramSmall, setInstagramSmall] = useState(false);
  const [isItActuallySmall, setIsItActuallySmall] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    screenWidth: undefined,
  });

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setSmall(true);
    } else {
      setSmall(false);
    }
  }, []);

  // on mount, check window width
  useEffect(() => {
    const media = window.matchMedia(`(max-width: 640px)`);

    // set event listener
    media.addEventListener("change", (e) => updateTarget(e));

    if (media.matches) {
      setSmall(true);
    }

    return () => media.removeEventListener("change", (e) => updateTarget(e));
  }, []);

  // instagram width fix
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          screenWidth: window.screen.width,
        });
      }
    }

    if (windowSize.width > windowSize.screenWidth) {
      setInstagramSmall(true);
    }

    if (small !== instagramSmall) {
      setIsItActuallySmall(true);
    } else {
      setIsItActuallySmall(small);
    }
  }, []);

  // defining toast padding according to window width
  const paddingRight = isItActuallySmall ? 0 : 0;
  const paddingLeft = isItActuallySmall ? 0 : 0;

  // on mount, framer motion SSR fix
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return <></>;
  }

  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
        </style>
      </Head>

      <Toaster
        position={small ? "bottom-center" : "top-right"}
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            border: "2px solid #d6d3d1",
            background: "#f5f5f4",
            padding: "25px",
            color: "#1c1917",
          },
          success: {
            iconTheme: {
              primary: "#a8a29e",
              secondary: "#f5f5f4",
            },
          },
          error: {
            iconTheme: {
              primary: "#a8a29e",
              secondary: "#f5f5f4",
            },
          },
          loading: {
            iconTheme: {
              primary: "#a8a29e",
              secondary: "#f5f5f4",
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
