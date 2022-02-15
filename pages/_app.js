import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            border: '2px solid #171717',
            background: 'black',
            padding: '16px',
            color: '#f5f5f5',
          },
          success: {
            iconTheme: {
              primary: '#171717',
              secondary: '#f5f5f5',
            },
          },
          erropr: {
            iconTheme: {
              primary: '#171717',
              secondary: '#f5f5f5',
            },
          },
          loading: {
            iconTheme: {
              primary: '#171717',
              secondary: '#f5f5f5',
            },
          },
        }}
        containerStyle={{
          top: 50,
          right: 45,
        }}
      />
      <Navbar />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
