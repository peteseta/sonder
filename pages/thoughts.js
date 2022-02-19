import { m, LazyMotion, domAnimation } from "framer-motion";

// local components
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";

export default function thoughts() {
  return (
    <div className="flex flex-col min-h-screen pb-4 bg-stone-100 max-h-fit">
      <div>
        <Navbar />
      </div>
      <div className="flex-1 pt-4 sm:pt-10">
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
    </div>
  );
}
