// local components
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";

export default function thoughts() {
  return (
    <div className="flex-row min-h-screen bg-black min-w-max">
      <Navbar className="flex-none h-4 min-h-fit" />
      <Feed className="" />
    </div>
  );
}

// classname for feed | flex-auto sm:min-w-full sm:max-w-full bg-neutral-100
