import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

// redux
import { Provider } from "react-redux";
import store from "/redux/store"

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
