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
          body: event.target.input.value,
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

    // temp postScream call
    const toastScream = postScream();

    // call and toast depending on promise
    toast.promise(
      toastScream,
      {
        loading: "posting thought...",
        error: "something went wrong.",
        success: "thought posted. get it off your mind.",
      },
      {
        style: {
          minWidth: "280px",
          maxHeight: "50px",
        },
        success: {
          duration: 4000,
        },
      }
    );
  };

  // validate input length to be below 1000 characters and post scream
  const handleSubmit = (event) => {
    // prevent default behavior of browser refresh on submit
    event.preventDefault();

    if (input.length > 5000) {
      toast.error("thought too long: 5000 character limit.");
    } else {
      toastPromise();
    }
  };

  return (
    // using a form - button is type=submit so it calls postScream once clicked.
    <form onSubmit={handleSubmit}>
      <div className="flex-col px-12 space-y-2 bg-transparent">
        <div className="grow">
          <textarea
            type="text"
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="5"
            placeholder="write something..."
            className="z-10 grow px-4 py-2 rounded-lg bg-transparent border-2 
                        bg-black border-neutral-900 outline-none text-white text-xl antialiased 
                        placeholder-neutral-500
                        w-full min-h-[50px]
                        overflow-auto"
          />
        </div>
        <button
          type="submit"
          value="submit"
          className="z-0 flex-none rounded-lg px-4 py-2 
                bg-transparent border-2 border-neutral-900 text-neutral-100 text-xl bold antialiased 
                disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none
                delay-100 ease-in-out hover:scale-105 duration-300 active:underline
                hover:shadow-[0_0px_25px_0px_rgba(255,255,255,0.2)]"
          disabled={!input.trim()}
        >
          get it off my mind.
        </button>
      </div>
    </form>
  );
}

export default Input;
