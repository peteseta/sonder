import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

// local components
import Navbar from "../components/Navbar";
import Input from "../components/Input";

export default function Home(props) {
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
            <Input />
          </m.div>
        </LazyMotion>
      </AnimatePresence>
    </div>
  );
}
