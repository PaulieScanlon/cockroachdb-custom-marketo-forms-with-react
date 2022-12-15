import { Fragment } from 'react'
import CockroachLabsLogo from '../components/cockroach-labs-logo'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <header className="fixed bg-white w-full px-4 py-4 shadow">
        <nav>
          <a href="https://www.cockroachlabs.com/" target="_blank" rel="noreferrer">
            <CockroachLabsLogo />
          </a>
        </nav>
      </header>
      <main className="prose px-4 pt-24 bg-brand-deep-purple max-w-full min-h-screen">
        <Component {...pageProps} />
      </main>
    </Fragment>
  )
}

export default App
