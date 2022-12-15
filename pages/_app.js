import { Fragment } from 'react'

import CockroachLabsLogo from '../components/cockroach-labs-logo'
import GitHubLogo from '../components/github-logo'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <header className="fixed bg-white w-full px-4 py-4 shadow">
        <nav className="flex items-center justify-between">
          <a href="https://www.cockroachlabs.com/" target="_blank" rel="noreferrer">
            <CockroachLabsLogo />
          </a>
          <a href="https://github.com/PaulieScanlon/cockroachdb-marketo-test-forms/" target="_blank" rel="noreferrer">
            <GitHubLogo />
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
