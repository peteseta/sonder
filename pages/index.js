import { LazyMotion, domAnimation, m } from "framer-motion";

// local components
import Input from "../components/Input";
import Navbar from "../components/Navbar";

export default function Home(props) {
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
          <Input />
        </m.div>
      </LazyMotion>
    </div>
  );
}
