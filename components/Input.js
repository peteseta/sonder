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

    const newlines = 0;
    const newlinesExist = false;

    if (input.match(/\n/g)) {
      const newines = input.match(/\n/g);
      const newlinesExist = true;
    }

    if (input.length > 5000) {
      toast.error("thought too long: 5000 character limit.");
    } else if (newlinesExist == true) {
      if (newlines.length !== null && newlines.length > 10) {
        toast.error("too many lines.");
      }
    } else {
      toastPromise();
    }
  };

  return (
    // using a form - button is type=submit so it calls postScream once clicked.
    <form onSubmit={handleSubmit}>
      <div className="flex-col px-6 pb-6 space-y-2 min-w-fit sm:px-14">
        <textarea
          type="text"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="5"
          placeholder="what's on your mind?"
          className="px-4 py-4 rounded-lg bg-transparent border-2 bg-black border-stone-300 outline-none text-stone-800 sm:text-2xl antialiased placeholder-stone-500 w-full min-h-[50px] overflow-auto"
        />

        <button
          type="submit"
          value="submit"
          className="px-4 py-3 text-sm antialiased font-bold duration-300 ease-in-out bg-transparent border-2 rounded-lg shadow-sm border-stone-300 text-stone-800 sm:text-xl disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none disabled:font-normal sm:delay-100 hover:scale-105 active:underline hover:shadow-lg"
          disabled={!input.trim()}
        >
          get it off my mind.
        </button>
      </div>
    </form>
  );
}

export default Input;
