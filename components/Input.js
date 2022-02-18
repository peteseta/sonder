import { useState } from "react";
import toast from "react-hot-toast";

function Input() {
  // input handler
  const [input, setInput] = useState("");

  // handles submission of scream
  const postScream = async () => {
    // prevent default behavior of browser refresh on submit
    event.preventDefault();

    // post req to API
    const response = await fetch(
      "https://asia-southeast1-sonder-e7919.cloudfunctions.net/api/scream",
      {
        body: JSON.stringify({
          body: input,
        }),
        headers: {
          "Content-Type": "application/json",
          "Content-Length": JSON.stringify({ input }),
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
      }
    );

    // clear text input area
    setInput("");
  };

  // call this for promise toast - loading --> success OR error
  const toastPromise = () => {
    // prevent default behavior of browser refresh on submit
    event.preventDefault();

    // call and toast depending on promise
    toast.promise(
      postScream(),
      {
        loading: "posting thought...",
        error: "something went wrong.",
        success: "thought posted.",
      },
      {
        style: {
          minWidth: "120px",
          maxHeight: "40px",
        },
        success: {
          duration: 2000,
        },
      }
    );
  };

  // validate input length and handle newlines
  const handleSubmit = (event) => {
    // prevent default behavior of browser refresh on submit
    event.preventDefault();
    const newlines = input.match(/\n/g);
    console.log(newlines);

    if (input.length > 5000) {
      toast.error("thought too long: 5000 character limit.");
    } else if (newlines.length > 10) {
      toast.error("too many lines.");
    } else {
      toastPromise();
    }
  };

  return (
    // using a form - button is type=submit so it calls postScream once clicked.
    <form onSubmit={handleSubmit}>
      <div className="flex-col px-5 space-y-2 bg-transparent sm:px-14">
        <div className="grow">
          <textarea
            type="text"
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="5"
            placeholder="write something..."
            className="z-10 grow px-5 py-4 rounded-lg bg-transparent border-2 bg-black border-neutral-900 outline-none text-white sm:text-2xl antialiased placeholder-neutral-500 w-full min-h-[50px] overflow-auto"
          />
        </div>
        <button
          type="submit"
          value="submit"
          className="min-w-fit flex-none rounded-lg px-4 py-3 bg-transparent border-2 border-neutral-900 text-neutral-100 text-lg sm:text-xl bold antialiased shadow-[0_0px_25px_0px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none disabled:font-normal sm:delay-100 ease-in-out hover:scale-105 duration-300 active:underline hover:shadow-[0_0px_25px_0px_rgba(255,255,255,0.2)]"
          disabled={!input.trim()}
        >
          get it off my mind.
        </button>
      </div>
    </form>
  );
}

export default Input;
