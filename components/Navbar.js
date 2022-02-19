import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="px-6 pt-6 -space-y-2 bg-black sm:px-14 sm:pt-10">
      <div className="text-6xl antialiased font-bold text-white sm:text-8xl">
        {/* <TypeIt
          options={{
            strings: ["sonder."],
            speed: 150,
            cursor: false,
          }}
        ></TypeIt> */}
        sonder.
      </div>
      <div className="justify-start space-x-4">
        <Link href="/">
          <button
            className={
              router.pathname == "/"
                ? "h-full text-4xl sm:underline decoration-[6px] decoration-neutral-900 underline-offset-[6px] antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
                : "h-full text-4xl no-underline decoration-neutral-900 antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
            }
          >
            write
          </button>
        </Link>
        <Link href="/thoughts">
          <button
            className={
              router.pathname == "/thoughts"
                ? "h-full text-4xl sm:underline decoration-[6px] decoration-neutral-900 underline-offset-[6px] antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
                : "h-full text-4xl no-underline decoration-neutral-900 antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
            }
          >
            read
          </button>
        </Link>
        <Link href="/about">
          <button
            className={
              router.pathname == "/about"
                ? "h-full text-4xl sm:underline decoration-[6px] decoration-neutral-900 underline-offset-[6px] antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
                : "h-full text-4xl no-underline decoration-neutral-900 antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
            }
          >
            about
          </button>
        </Link>
      </div>
    </nav>
  );
}
