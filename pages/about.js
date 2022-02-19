import { LazyMotion, domAnimation, m } from "framer-motion";
import { Disclosure, Transition } from "@headlessui/react";

// local components
import Navbar from "../components/Navbar";

export default function about() {
  return (
    <div className="flex flex-col min-h-screen pb-6 bg-black max-h-fit">
      <div>
        <Navbar />
      </div>
      <div className="flex-1">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col pt-4 space-y-2 sm:pt-10"
          >
            <div className="flex-col px-6 space-y-2 sm:px-12">
              <div className="p-4 text-sm border-2 rounded-lg bg-neutral-900 border-neutral-800 sm:text-xl text-neutral-100">
                <div className="font-bold">/ˈsɑndɚ/ • noun.</div>
                <div>
                  the realization that each random passerby is living a life as
                  vivid and complex as your own
                </div>
              </div>

              <div class="px-1 relative flex py-2 items-center">
                <div class="flex-grow border-t border-neutral-900"></div>
              </div>

              <div className="p-4 text-sm border-2 rounded-lg border-neutral-900 text-neutral-100 sm:text-xl">
                <div className="text-xl font-bold sm:text-2xl text-neutral-100">
                  important:
                </div>
                <div className="font-bold text-neutral-100">
                  sonder is not a replacement for professional/qualified advice,
                  diagnosis, counselling, treatment or therapy.
                </div>
                <br />
                <div>
                  sonder does not and is not meant to provide clinical support
                  or crisis response.
                </div>
                <br />
                <div>
                  if you or someone you know is experiencing suicidal thoughts
                  or a crisis, please reach out immediately:&nbsp;
                  <a
                    href="https://www.opencounseling.com/suicide-hotlines"
                    className="underline text-neutral-200 hover:text-neutral-100"
                  >
                    view hotline information
                  </a>
                </div>
                <br />
                <div>
                  please remember that the diagnosis and treatment of depression
                  and other psychiatric disorders requires trained medical
                  professionals.
                </div>
              </div>

              <div class="px-1 relative flex py-2 items-center">
                <div class="flex-grow border-t border-neutral-900"></div>
              </div>

              <div className="flex flex-col space-y-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div className="px-4 py-4 border-2 rounded-lg border-neutral-900">
                        <Disclosure.Button
                          className={
                            open
                              ? "justify-between flex w-full text-sm font-medium text-left text-neutral-100"
                              : "justify-between flex w-full text-sm font-medium text-left text-neutral-100"
                          }
                        >
                          <span className="text-xl font-bold sm:text-2xl">
                            what is sonder?
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={
                              open
                                ? "transform rotate-180 w-5 h-5 text-neutral-100 self-center"
                                : "w-5 h-5 text-neutral-100 self-center"
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-300 ease-out"
                          enterFrom="-translate-y-5 opacity-0"
                          enterTo="translate-y-0 opacity-100"
                          leave="transition duration-300 ease-out"
                          leaveFrom="translate-y-0 opacity-100"
                          leaveTo="-translate-y-5 opacity-0"
                        >
                          <Disclosure.Panel className="pt-2 text-sm sm:text-xl text-neutral-100 border-neutral-900">
                            sonder is an anonymous, safe, and inclusive place
                            for you to speak your mind.
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div className="px-4 py-4 border-2 rounded-lg border-neutral-900">
                        <Disclosure.Button
                          className={
                            open
                              ? "justify-between flex w-full text-sm font-medium text-left text-neutral-100"
                              : "justify-between flex w-full text-sm font-medium text-left text-neutral-100"
                          }
                        >
                          <span className="text-xl font-bold sm:text-2xl">
                            what can i share on sonder?
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={
                              open
                                ? "transform rotate-180 w-5 h-5 text-neutral-100 self-center"
                                : "w-5 h-5 text-neutral-100 self-center"
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-300 ease-out"
                          enterFrom="-translate-y-5 opacity-0"
                          enterTo="translate-y-0 opacity-100"
                          leave="transition duration-300 ease-out"
                          leaveFrom="translate-y-0 opacity-100"
                          leaveTo="-translate-y-5 opacity-0"
                        >
                          <Disclosure.Panel className="pt-2 text-sm sm:text-xl text-neutral-100 border-neutral-900">
                            on sonder, you share thoughts— a few words, a
                            sentence or two, or when you need it, a few
                            paragraphs. it can be about anything; a part of your
                            day, some encouraging words for a stranger— or a
                            confession nobody can know.
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div className="px-4 py-4 border-2 rounded-lg border-neutral-900">
                        <Disclosure.Button
                          className={
                            open
                              ? "justify-between flex w-full text-sm font-medium text-left text-neutral-100"
                              : "justify-between flex w-full text-sm font-medium text-left text-neutral-100"
                          }
                        >
                          <span className="text-xl font-bold sm:text-2xl">
                            is sonder really anonymous?
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={
                              open
                                ? "transform rotate-180 w-5 h-5 text-neutral-100 self-center"
                                : "w-5 h-5 text-neutral-100 self-center"
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-300 ease-out"
                          enterFrom="-translate-y-5 opacity-0"
                          enterTo="translate-y-0 opacity-100"
                          leave="transition duration-300 ease-out"
                          leaveFrom="translate-y-0 opacity-100"
                          leaveTo="-translate-y-5 opacity-0"
                        >
                          <Disclosure.Panel className="pt-2 text-sm sm:text-xl text-neutral-100 border-neutral-900">
                            you don't have to login or register in any way to
                            use sonder. we don't know who you are, nor do we
                            collect or store that information.
                            <br />
                            <br />
                            sonder is also open-source, meaning the source code
                            of the{" "}
                            <a
                              href="https://www.github.com/peteseta/sonder"
                              className="underline"
                            >
                              client
                            </a>{" "}
                            and the{" "}
                            <a
                              href="https://www.github.com/peteseta/sonder-functions"
                              className="underline"
                            >
                              api
                            </a>{" "}
                            both are viewable by anyone.
                            <br />
                            <br />
                            when you post a thought, we collect the content of
                            your thought along with the current date.
                            <br />
                            <br />
                            as of v0.1-master, we do not store cookies or any
                            user-specific information on your device.
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
}
