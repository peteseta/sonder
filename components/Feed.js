import { useState, useEffect } from "react";

export default function Feed() {
  //TODO find a way to fetch only some of the screams - as the db gets bigger this will make it impossible to load all the screams

  // init thoughts - initialState is an empty array
  const [screams, setScreams] = useState([]);

  // init random scream picker thing
  let currentScreamBody = "";
  let currentScreamIndex = 0;

  // fisher-yates array shuffle
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function updateScreamBody(index) {
    currentScreamBody = screams[index].body;
    document.getElementById("thought").innerHTML = currentScreamBody;
  }

  function nextScream() {
    // if currentScreamIndex is the last item in the array, set currentScreamIndex to 0
    if (currentScreamIndex === screams.length - 1) {
      currentScreamIndex = 0;
      updateScreamBody(currentScreamIndex);
    } else {
      currentScreamIndex++;
      updateScreamBody(currentScreamIndex);
    }
  }

  function previousScream() {
    if (currentScreamIndex === 0) {
      currentScreamIndex = screams.length - 1;
      updateScreamBody(currentScreamIndex);
    } else {
      currentScreamIndex--;
      updateScreamBody(currentScreamIndex);
    }
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
    currentScreamBody = firstLoadRandomScream.body;
    document.getElementById("thought").innerHTML = currentScreamBody;
  };

  // run fetchScream on first render
  useEffect(() => {
    fetchScream();
  }, []);

  return (
    <div className="flex flex-row space-x-4 px-14">
      <button
        id="btnPrevious"
        onClick={previousScream}
        className="basis-[5%] flex-auto rounded-lg p-4 border-2 border-neutral-900 text-neutral-100 opacity-75 hover:opacity-100 hover:scale-105 active:delay-0 active:duration-0 active:border-neutral-800 text-xl bold antialiased delay-100 ease-in-out duration-300 hover:shadow-[0_0px_25px_0px_rgba(255,255,255,0.2)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 stroke-neutral-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        prev
      </button>

      <div
        id="thoughtBlock"
        className="flex-grow px-4 py-4 text-2xl border-2 rounded-lg basis-[90%] overscroll-contain border-neutral-900 text-neutral-100"
      >
        <div
          id="thought"
          className="break-words transition-all opacity-100 overscroll-contain"
        ></div>
      </div>

      <button
        id="btnNext"
        onClick={nextScream}
        className="basis-[5%] flex-auto rounded-lg p-4 border-2 border-neutral-900 text-neutral-100 opacity-75 hover:opacity-100 hover:scale-105 active:delay-0 active:duration-0 active:border-neutral-800 text-xl bold antialiased delay-100 ease-in-out duration-300 hover:shadow-[0_0px_25px_0px_rgba(255,255,255,0.2)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 stroke-neutral-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        next
      </button>
    </div>
  );
}
