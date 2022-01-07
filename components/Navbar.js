import Link from 'next/link';

export default function Navbar() {

    return (
        <nav className='bg-black p-12'>
            <div className="inline-flex flex-col space-y-4 items-start justify-start pr-14 pb-14" style={{ width: 405, height: 86, }}>
                <p className="w-2/3 h-10 text-6xl font-bold text-white">sonder.</p>
                <div className="inline-flex space-x-4 items-start justify-start" style={{ width: 405, height: 31, }}>
                    <button className="w-18 h-full text-4xl text-white hover:underline">write</button>
                    <button className="w-21 h-full text-4xl text-white hover:underline">thoughts</button>
                    <button className="w-10 h-full text-4xl text-white hover:underline">about</button>
                </div>
            </div>
        </nav>
    )
}