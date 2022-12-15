import React from 'react'

import MarketoForm from '../components/marketo-form'
import NewsletterForm from '../components/newsletter-form'

const Page = () => {
  return (
    <section className="mx-auto max-w-3xl">
      <div>
        <h1>Off-site Marketo Form Tests</h1>
        <p>
          Sample code for how to create a custom Marketo form that's not deployed on{' '}
          <a href="https://www.cockroachlabs.com/" target="_blank" rel="noreferrer">
            cockroachlabs.com
          </a>
          .
          <br />
          Data captured via these forms is still submitted to the main Cockroach Marketo Database.
        </p>
      </div>
      <div>
        <MarketoForm debug={false} formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
        <NewsletterForm />
      </div>
    </section>
  )
}

export default Page

// baseURL: https://go.cockroachlabs.com
// munchkinId: 350-QIN-827
// formId: 1478 // mktoForm_1478
