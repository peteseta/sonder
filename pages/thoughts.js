import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";

// local components
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";

export default function thoughts() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <AnimatePresence>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Feed />
          </m.div>
        </LazyMotion>
      </AnimatePresence>
    </div>
  );
}

// classname flex-row min-h-screen bg-black min-w-min
