import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { m, LazyMotion, domAnimation } from "framer-motion";

export default function Feed() {
  // init thoughts - initialState is an empty array
  const [screams, setScreams] = useState([]);

  // init random scream picker thing
  let currentScreamBody = "";
  let currentScreamTimestamp = "";
  let currentScreamIndex = 0;

  // fisher-yates array shuffle
  function shuffle(array) {
    // let currentIndex = array.length,
    //   randomIndex;

    // // While there remain elements to shuffle...
    // while (currentIndex != 0) {
    //   // Pick a remaining element...
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex--;

    //   // And swap it with the current element.
    //   [array[currentIndex], array[randomIndex]] = [
    //     array[randomIndex],
    //     array[currentIndex],
    //   ];
    // }

    return array;
  }

  // update scream body in the renderer by index
  function updateScreamBody(index) {
    // currentScreamBody = screams[index].body.replaceAll(
    //   /(\r\n|\r|\n){2,}/g,
    //   "\n"
    // );
    currentScreamBody = screams[index].body.replaceAll("\n", "<br>");
    currentScreamTimestamp = parseISODate(screams[index].createdAt);
    document.getElementById("thought").innerHTML = currentScreamBody;
    document.getElementById("timestamp").innerHTML = currentScreamTimestamp;
  }

  // up index and update scream body
  function nextScream() {
    // there's a trycatch here because it works that way, idk too
    try {
      if (currentScreamIndex === screams.length - 1) {
        currentScreamIndex = 0;
        updateScreamBody(currentScreamIndex);
      } else {
        currentScreamIndex++;
        updateScreamBody(currentScreamIndex);
      }
    } catch (err) {}
  }

  // decrease index and update scream body
  function previousScream() {
    // there's a trycatch here because it works that way, idk too
    try {
      if (currentScreamIndex === 0) {
        currentScreamIndex = screams.length - 1;
        updateScreamBody(currentScreamIndex);
      } else {
        currentScreamIndex--;
        updateScreamBody(currentScreamIndex);
      }
    } catch (err) {}
  }

  function parseISODate(s) {
    var b = s.split(/\D+/);
    const d = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    return d.toLocaleDateString("en-GB");
  }

  // on page load, API get request to get screams + sets a random scream for feed
  const fetchScream = async () => {
    const response = await fetch(
      "https://asia-southeast1-sonder-e7919.cloudfunctions.net/api/screams"
    );
    const screams = await response.json();
    setScreams(shuffle(screams));

    // show random scream
    currentScreamIndex = (Math.random() * screams.length) >> 0;
    const firstLoadRandomScream = screams[currentScreamIndex];
    currentScreamBody = firstLoadRandomScream.body.replaceAll("\n", "<br>");
    currentScreamTimestamp = parseISODate(firstLoadRandomScream.createdAt);
    document.getElementById("thought").innerHTML = currentScreamBody;
    document.getElementById("timestamp").innerHTML = currentScreamTimestamp;
  };

  // call this for promise toast - loading --> success OR error
  const loadPromise = () => {
    // call and toast depending on promise
    toast.promise(
      fetchScream(),
      {
        loading: "loading...",
        error: "something went wrong!",
        success: "done.",
      },
      {
        style: {
          minWidth: "10px",
          maxHeight: "50px",
        },
        success: {
          duration: 500,
        },
      }
    );
  };

  // run fetchScream on first render
  useEffect(() => {
    loadPromise();
  }, []);

  // when the right arrow key is pressed, trigger nextScream
  // when the left arrow key is pressed, trigger previousScream
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 39) {
        nextScream();
      } else if (e.keyCode === 37) {
        previousScream();
      }
    });
  });

  return (
    <div className="flex flex-row max-w-lg px-3 pb-6 space-x-2 sm:px-14 sm:space-x-4 sm:min-w-full sm:max-w-fit">
      <button
        id="btnPrevious"
        onClick={previousScream}
        className="sticky top-6 max-h-11 sm:max-h-16 basis-[2.5%] sm:basis-[5%] p-2 sm:p-5 border-2 rounded-lg border-stone-200 opacity-75 hover:opacity-100 sm:hover:shadow-sm sm:delay-100 duration-300 hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 opacity-25 sm:w-5 sm:h-5 stroke-stone-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="basis-[95%] sm:basis-[90%] p-4 border-2 rounded-lg border-stone-200 text-stone-800">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              id="timestamp"
              className="pb-1 text-sm sm:text-lg text-stone-500"
            ></div>
            <div
              id="thought"
              className="leading-6 break-words sm:leading-normal sm:text-2xl"
            ></div>
          </m.div>
        </LazyMotion>
      </div>

      <button
        id="btnNext"
        onClick={nextScream}
        className="sticky top-6 max-h-11 sm:max-h-16 basis-[2.5%] sm:basis-[5%] p-2 sm:p-5 border-2 rounded-lg border-stone-200 opacity-75 hover:opacity-100 sm:hover:shadow-sm sm:delay-100 duration-300 hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 opacity-25 sm:w-5 sm:h-5 stroke-stone-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
