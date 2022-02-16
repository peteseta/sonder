export default function Navbar() {
  return (
    <nav className="bg-black px-14 pt-10 pb-16">
      <div
        className="inline-flex flex-col space-y-12 items-start justify-start pr-14 pb-14"
        style={{ width: 405, height: 86 }}
      >
        <p className="w-2/3 h-10 text-8xl font-bold text-white antialiased">
          sonder.
        </p>
        <div
          className="inline-flex space-x-4 items-start justify-start"
          style={{ width: 405, height: 31 }}
        >
          <a href="/">
            <button className="h-full text-4xl text-neutral-200 transition ease-in-out hover:scale-105 hover:text-white duration-300 antialiased">
              write
            </button>
          </a>
          <a href="/thoughts">
            <button className="h-full text-4xl text-neutral-200 transition ease-in-out hover:scale-105 hover:text-white duration-300 antialiased">
              thoughts
            </button>
          </a>
          <a href="/about">
            <button className="h-full text-4xl text-neutral-200 transition ease-in-out hover:scale-105 hover:text-white duration-300 antialiased">
              about
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
