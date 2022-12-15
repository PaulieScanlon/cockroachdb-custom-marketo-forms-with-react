import React from 'react'

import MarketoForm from '../components/marketo-form'
import NewsletterForm from '../components/newsletter-form'
import FullForm from '../components/full-form'

const Page = () => {
  return (
    <section className="mx-auto max-w-3xl grid gap-24">
      <div>
        <h1 className="m-0">Marketo Forms with Next.js</h1>
        <p className="mt-2">
          Create custom Marketo forms that submit data straight to your companies main lead capture database!
        </p>
      </div>
      <div>
        <MarketoForm debug={false} formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
        <NewsletterForm />
      </div>
      <div>
        <MarketoForm debug={false} formId={process.env.NEXT_PUBLIC_FULL_FORM_ID} />
        <FullForm />
      </div>
    </section>
  )
}

export default Page
