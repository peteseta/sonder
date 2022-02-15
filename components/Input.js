import { useState } from "react";
import { postScream } from "../redux/actions/dataActions";

function Input() {
    const [input, setInput] = useState("");

    // handles submission of scream
    const postScream = async () => {
        const response = await fetch('/scream', {
            method: 'POST',
            body: JSON.stringify({ input }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await response.json()
        console.log(res)
    }

    return (
        <div className="bg-transparent px-12 flex-col space-y-2">
            <div className="grow">
                <textarea
                    type='text'
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
                className="z-0 flex-none rounded-lg px-4 py-2 
                bg-transparent border-2 border-neutral-900 text-neutral-100 text-xl bold antialiased 
                disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none
                delay-100 ease-in-out hover:scale-105 duration-300 active:underline
                hover:shadow-[0_0px_25px_0px_rgba(255,255,255,0.2)]"
                disabled={!input.trim()}
                onClick={postScream}
            >
                get it off my mind.
            </button >
        </div >
    )
}

export default Input;