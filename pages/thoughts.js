import { m, LazyMotion, domAnimation } from "framer-motion";

// local components
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";

export default function thoughts() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Feed />
        </m.div>
      </LazyMotion>
    </div>
  );
}
