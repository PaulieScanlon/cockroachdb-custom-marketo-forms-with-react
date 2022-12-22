import React from 'react'

import NewsletterForm from '../components/newsletter-form'
import FullForm from '../components/full-form'
import ArrowRight from '../components/arrow-right'

const Page = () => {
  return (
    <section className="mx-auto max-w-4xl grid gap-24">
      <div>
        <h1 className="font-extra-bold text-center text-5xl sm:text-7xl !leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-iridescent-blue to-brand-electric-purple">
          Custom Marketo Forms With React
        </h1>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center">
            Create custom Marketo forms that still submit data straight to your companies main lead capture database!
          </h2>
          <p className="text-center font-mono font-medium text-sm sm:text-base">
            /* You can read more about how these forms work on{' '}
            <a
              href="https://paulie.dev/posts/2022/12/how-to-create-custom-marketo-forms-with-react/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-iridescent-blue whitespace-nowrap"
            >
              paulie.dev
            </a>{' '}
            */
          </p>
          <div className="flex justify-center py-4">
            <a
              href="https://paulie.dev/posts/2022/12/how-to-create-custom-marketo-forms-with-react/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center justify-center font-bold text-white px-8 py-3 rounded-full bg-brand-primary no-underline trainsition-all duration-300 hover:brightness-110 hover:gap-4"
            >
              <span>Read Post</span>
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div>
        <NewsletterForm formId={process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID} />
      </div>
      <div>
        <FullForm formId={process.env.NEXT_PUBLIC_FULL_FORM_ID} />
      </div>
    </section>
  )
}

export default Page
