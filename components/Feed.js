import { useState, useEffect } from "react";

export default function Feed() {
  //TODO find a way to fetch only some of the screams - as the db gets bigger this will make it impossible to load all the screams
  // init thoughts - initialState is an empty array
  const [screams, setScreams] = useState([]);
  var currentScreamBody = " ";

  // picks a random scream each button click and shows in feed
  function getRandomScream() {
    const randomScream = screams[(Math.random() * screams.length) >> 0];
    currentScreamBody = randomScream.body;
    document.getElementById("thought").innerHTML = currentScreamBody;
  }

  // on page load, API get request to get screams + sets a random scream for feed
  const fetchScream = async () => {
    const response = await fetch(
      "https://asia-southeast1-sonder-e7919.cloudfunctions.net/api/screams"
    );
    const screams = await response.json();
    setScreams(screams);

    // sets feed to view the latest thought, just once, for some reason it breaks if you call getRandomScream()
    const randomScream = screams[(Math.random() * screams.length) >> 0];
    currentScreamBody = randomScream.body;
    document.getElementById("thought").innerHTML = currentScreamBody;
    document.getElementById("thought").classList.add = "hidden";
  };

  // run fetchScream on first render
  useEffect(() => {
    fetchScream();
  }, []);

  return (
    <div className="py-6 space-y-2 px-14">
      <div
        id="thoughtBlock"
        className="min-w-full min-h-full px-4 py-4 text-xl border-2 rounded-lg border-neutral-900 text-neutral-100"
      >
        <blockquote
          id="thought"
          className="break-words transition-all opacity-100 min-h-max overscroll-contain"
        >
          <p className="break-words"></p>
        </blockquote>
      </div>

      <button
        id="btn-fade"
        onClick={getRandomScream}
        className="z-0 flex-none rounded-lg px-4 py-2 border-2 border-neutral-900 text-neutral-100 text-xl bold antialiased disabled:opacity-50 disabled:hover:scale-100 bg-transparent disabled:shadow-none delay-100 ease-in-out hover:scale-105 duration-300 active:underline hover:shadow-[0_0px_25px_0px_rgba(255,255,255,0.2)]"
      >
        read another
      </button>
    </div>
  );
}
