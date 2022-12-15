import React from 'react'

import MarketoForm from '../components/marketo-form'
import NewsletterForm from '../components/newsletter-form'

const Page = () => {
  return (
    <section className="mx-auto max-w-3xl">
      <h1>Page</h1>
      <MarketoForm debug={false} formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
      <NewsletterForm />
    </section>
  )
}

export default Page

// baseURL: https://go.cockroachlabs.com
// munchkinId: 350-QIN-827
// formId: 1478 // mktoForm_1478
