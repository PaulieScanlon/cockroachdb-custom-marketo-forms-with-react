import React, { useState, useReducer, Fragment } from 'react'

import { initalState, reducer } from '../hooks/use-reducer'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [state, dispatch] = useReducer(reducer, initalState)

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch({
      type: 'isSubmitting'
    })

    window.MktoForms2.getForm(process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID)
      .vals({ Email: email })
      .onSuccess(() => {
        dispatch({
          type: 'success'
        })
        setEmail('')
        return false
      })
      .submit()
  }

  // console.log('NEWSLETTER: ', window.MktoForms2.getForm(process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID).getValues())

  return (
    <Fragment>
      <h3 className="m-0">Newsletter Form</h3>
      <p>Example form used to capture email addresses only.</p>
      <div className="bg-white rounded border border-brand-gray-b p-8 sm:px-16 pt-16">
        <h3 className="m-0 font-bold text-brand-deep-purple">Signup to Our Newsletter</h3>
        <small className="block mb-8 text-brand-gray">* Required fields</small>
        <form onSubmit={handleSubmit} className="form">
          <label className="form--label">
            <span className="form--label-text">
              Email<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="email"
              required
              placeholder="you@example.xyz"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </label>
          <span className="form--announce-container">
            {state.isSubmitting ? <span className="text-brand-orange">Submitting...</span> : null}
            {state.success ? <span className="form--announce-success">Thanks for signing up.</span> : null}
          </span>
          <button type="submit" className="trainsition-all form--button-submit" disabled={state.isSubmitting}>
            Subscribe
          </button>
        </form>
        <small className="preferences--cta">
          To update your email preferences visit{' '}
          <a
            href="https://www.cockroachlabs.com/email-preferences/"
            target="_blank"
            rel="noreferrer"
            className="text-brand-deep-purple"
          >
            cockroachlabs.com
          </a>
        </small>
      </div>
    </Fragment>
  )
}

export default NewsletterForm
