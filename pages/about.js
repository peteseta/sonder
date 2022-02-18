import { LazyMotion, AnimatePresence, domAnimation, m } from "framer-motion";

// local components
import Navbar from "../components/Navbar";

export default function about() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <AnimatePresence>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div></div>
          </m.div>
        </LazyMotion>
      </AnimatePresence>
    </div>
  );
}
