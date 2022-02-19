import { LazyMotion, domAnimation, m } from "framer-motion";

// local components
import Input from "../components/Input";
import Navbar from "../components/Navbar";

export default function Home(props) {
  return (
    <div className="flex flex-col min-h-screen bg-black max-h-fit">
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
            <Input />
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
}
