import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="px-6 pt-4 pb-4 -space-y-2 bg-white sm:px-14 sm:pb-10 sm:pt-6">
      <div className="text-6xl antialiased font-bold tracking-tight text-transparent -translate-x-1 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:text-8xl">
        {/* <TypeIt
          options={{
            strings: ["sonder."],
            speed: 150,
            cursor: false,
          }}
        ></TypeIt> */}
        sonder.
      </div>
      <div className="justify-start space-x-4 text-stone-800">
        <Link href="/">
          <button
            className={
              router.pathname == "/"
                ? "h-full text-4xl underline decoration-[6px] decoration-stone-100 underline-offset-[3px] antialiased transition duration-300 ease-in-out hover:scale-105 hover:text-black"
                : "h-full text-4xl no-underline decoration-white antialiased transition duration-300 ease-in-out hover:scale-105 hover:text-black"
            }
          >
            write
          </button>
        </Link>
        <Link href="/thoughts">
          <button
            className={
              router.pathname == "/thoughts"
                ? "h-full text-4xl underline decoration-[6px] decoration-stone-100 underline-offset-[3px] antialiased transition duration-300 ease-in-out hover:scale-105 hover:text-black"
                : "h-full text-4xl no-underline decoration-white antialiased transition duration-300 ease-in-out hover:scale-105 hover:text-black"
            }
          >
            read
          </button>
        </Link>
        <Link href="/about">
          <button
            className={
              router.pathname == "/about"
                ? "h-full text-4xl underline decoration-[6px] decoration-stone-100 underline-offset-[3px] antialiased transition duration-300 ease-in-out hover:scale-105 hover:text-black"
                : "h-full text-4xl no-underline decoration-white antialiased transition duration-300 ease-in-out hover:scale-105 hover:text-black"
            }
          >
            about
          </button>
        </Link>
      </div>
    </nav>
  );
}
