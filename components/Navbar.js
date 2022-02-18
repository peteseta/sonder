import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="px-6 pt-4 bg-black sm:px-14 sm:pt-10">
      <div className="inline-flex flex-col items-start justify-start pb-6 space-y-12 sm:pb-10">
        <p className="w-2/3 h-10 antialiased font-bold text-white text-8xl">
          sonder.
        </p>
        <div className="inline-flex items-start justify-start space-x-4">
          <Link href="/">
            <button
              className={
                router.pathname == "/"
                  ? "h-full text-4xl underline decoration-[6px] decoration-neutral-900 underline-offset-[6px] antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
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
                  ? "h-full text-4xl underline decoration-[6px] decoration-neutral-900 underline-offset-[6px] antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
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
                  ? "h-full text-4xl underline decoration-[6px] decoration-neutral-900 underline-offset-[6px] antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
                  : "h-full text-4xl no-underline decoration-neutral-900 antialiased transition duration-300 ease-in-out text-neutral-200 hover:scale-105 hover:text-white"
              }
            >
              about
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
