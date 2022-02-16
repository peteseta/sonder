// local components
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'

export default function thoughts() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <Feed />
        </main>
    )
}