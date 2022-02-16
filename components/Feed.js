import { useState, useEffect } from 'react'

export default function Feed() {

    //TODO find a way to fetch only some of the screams - as the db gets bigger this will make it impossible to load all the screams
    // init thoughts - initialstate is an empty array
    const [screams, setScreams] = useState([])
    const currentScreamBody = ""

    // on page load, API get request to get screams + sets a random scream for feed
    const fetchScream = async () => {
        const response = await fetch('https://asia-southeast1-sonder-e7919.cloudfunctions.net/api/screams')
        const screams = await response.json()
        setScreams(screams)

        // sets feed to view the latest thought, just once
        const randomScream = screams[Math.random() * screams.length >> 0]
        currentScreamBody = randomScream.body
        document.getElementById("thought").innerHTML = currentScreamBody

        //! remove on prod 
        console.log('screams fetched')
    }

    // picks a random scream each button click and shows in feed
    function getRandomScream() {
        const randomScream = screams[Math.random() * screams.length >> 0]
        currentScreamBody = randomScream.body
        document.getElementById("thought").innerHTML = currentScreamBody

        //! remove on prod
        console.log(randomScream)
        console.log(currentScreamBody)
    }

    // run fetchScream on first render
    useEffect(() => { fetchScream() }, [])

    return (
        <div className='px-14 py-6 space-y-2'>
            <div className='block px-4 py-4 border-l-8 border-2 border-neutral-800 bg-neutral-900 rounded-lg text-neutral-100 text-xl'>
                <blockquote>
                    <p id="thought"></p>
                </blockquote>
            </div>

            <button onClick={getRandomScream} className='z-0 flex-none rounded-lg px-4 py-2 
                bg-transparent border-2 border-neutral-900 text-neutral-100 text-xl bold antialiased 
                disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none
                delay-100 ease-in-out hover:scale-105 duration-300 active:underline
                hover:shadow-[0_0px_25px_0px_rgba(255,255,255,0.2)]'>load screams</button>

        </div>

    )
}
