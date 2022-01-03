import Link from 'next/link';

export default function Navbar() {

    const user = null;

    return (
        <nav className='bg-black p-12'>
            <div className="inline-flex flex-col space-y-4 items-start justify-start pr-14 pb-14" style={{ width: 405, height: 86, }}>
                <p className="w-2/3 h-10 text-6xl font-bold text-white">sonder.</p>
                <div className="inline-flex space-x-4 items-start justify-start" style={{ width: 405, height: 31, }}>
                    <button className="w-1/3 h-full text-4xl text-white hover:underline active:font-bold">thoughts</button>
                    <button className="w-22 h-full text-4xl text-white hover:underline active:font-bold">about</button>
                    <button className="w-36 h-full text-4xl text-white hover:underline active:font-bold">resources</button>
                </div>
            </div>
        </nav>
    )
}