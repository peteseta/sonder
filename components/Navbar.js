export default function Navbar() {
  return (
    <nav className="pt-10 pb-16 bg-black px-14">
      <div
        className="inline-flex flex-col items-start justify-start space-y-12 pr-14 pb-14"
        style={{ width: 405, height: 86 }}
      >
        <p className="w-2/3 h-10 antialiased font-bold text-white text-8xl">
          sonder.
        </p>
        <div
          className="inline-flex items-start justify-start space-x-4"
          style={{ width: 405, height: 31 }}
        >
          <a href="/">
            <button className="h-full text-4xl antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white">
              write
            </button>
          </a>
          <a href="/thoughts">
            <button className="h-full text-4xl antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white">
              read
            </button>
          </a>
          <a href="/about">
            <button className="h-full text-4xl antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white">
              about
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
