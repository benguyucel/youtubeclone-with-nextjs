import '../styles/globals.css'
import '../styles/header.scss'
import '../styles/sidebar.scss'
import '../styles/footer.scss'
import '../styles/homecontent.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side default-scrooll">
          <Component {...pageProps} />
        </div>
      </div>
    </React.Fragment >
  )
}
