import { useState, useEffect } from "react";
import thoughts from "../pages/thoughts";

export default function Feed() {
  //TODO find a way to fetch only some of the screams - as the db gets bigger this will make it impossible to load all the screams
  // init thoughts - initialState is an empty array
  const [screams, setScreams] = useState([]);
  const currentScreamBody = "";

  // on page load, API get request to get screams + sets a random scream for feed
  const fetchScream = async () => {
    const response = await fetch(
      "https://asia-southeast1-sonder-e7919.cloudfunctions.net/api/screams"
    );
    const screams = await response.json();
    setScreams(screams);

    // sets feed to view the latest thought, just once
    const randomScream = screams[(Math.random() * screams.length) >> 0];
    currentScreamBody = randomScream.body;
    document.getElementById("thought").innerHTML = currentScreamBody;

    //TODO remove on prod
    console.log("screams fetched");
  };

  // picks a random scream each button click and shows in feed
  function getRandomScream() {
    const randomScream = screams[(Math.random() * screams.length) >> 0];
    currentScreamBody = randomScream.body;
    document.getElementById("thought").innerHTML = currentScreamBody;

    //TODO remove on prod
    console.log(randomScream);
    console.log(currentScreamBody);
  }

  // run fetchScream on first render
  useEffect(() => {
    fetchScream();
  }, []);

  return (
    <div className="py-6 space-y-2 px-14">
      <div
        id="thoughtBlock"
        className="relative px-4 py-4 text-xl border-2 rounded-lg opacity-100 min-h-fit max-w-screen overscroll-contain border-neutral-900 text-neutral-100"
      >
        <blockquote className="transition-all opacity-100 overscroll-contain">
          <p id="thought"></p>
        </blockquote>
      </div>

      <button
        onClick={getRandomScream}
        className="btn-fade z-0 flex-none rounded-lg px-4 py-2 border-2 border-neutral-900 text-neutral-100 text-xl bold antialiased disabled:opacity-50 disabled:hover:scale-100 bg-transparent disabled:shadow-none delay-100 ease-in-out hover:scale-105 duration-300 active:underline hover:shadow-[0_0px_25px_0px_rgba(255,255,255,0.2)]"
      >
        load screams
      </button>
    </div>
  );
}
