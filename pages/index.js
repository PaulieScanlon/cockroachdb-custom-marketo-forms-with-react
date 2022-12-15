import React from 'react'

import MarketoForm from '../components/marketo-form'
import NewsletterForm from '../components/newsletter-form'
import FullForm from '../components/full-form'

const Page = () => {
  return (
    <section className="mx-auto max-w-4xl grid gap-24">
      <div>
        <h1 className="mx-auto max-w-3xl text-center text-5xl sm:text-7xl !leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-iridescent-blue to-brand-electric-purple">
          Custom Marketo Forms With Next.js
        </h1>
        <h2 className="mx-auto max-w-2xl text-center">
          Create custom Marketo forms that submit data straight to your companies main lead capture database!
        </h2>
        <p className="text-center">
          You can read more about how these forms work on:{' '}
          <a href="https://" target="_blank" rel="noreferrer" className="text-brand-iridescent-blue">
            https://
          </a>
        </p>
      </div>
      {/* <div>
        <MarketoForm debug={false} formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
        <NewsletterForm />
      </div> */}
      <div>
        <MarketoForm debug={false} formId={process.env.NEXT_PUBLIC_FULL_FORM_ID} />
        <FullForm />
      </div>
    </section>
  )
}

export default Page
