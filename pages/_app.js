import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Toaster
        position='bottom-right'
        reverseOrder={false}
      />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
