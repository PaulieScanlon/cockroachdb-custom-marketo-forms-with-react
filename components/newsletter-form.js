import React, { useState, useReducer, Fragment } from 'react'
import PropTypes from 'prop-types'

import { initialState, reducer } from '../hooks/use-reducer'

import MarketoForm from './marketo-form'

const NewsletterForm = ({ formId }) => {
  const [email, setEmail] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch({
      type: 'isSubmitting'
    })

    window.MktoForms2.getForm(formId)
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
          <button type="submit" className="transition-all form--button-submit" disabled={state.isSubmitting}>
            {state.isSubmitting ? 'Please wait...' : 'Subscribe'}
          </button>
        </form>
        <small className="preferences--cta">
          To update your email preferences visit{' '}
          <a
            href="https://www.cockroachlabs.com/email-preferences/"
            target="_blank"
            rel="noreferrer"
            className="text-brand-deep-purple hover:!text-brand-primary"
          >
            cockroachlabs.com
          </a>
        </small>
        <MarketoForm debug={false} formId={formId} />
      </div>
    </Fragment>
  )
}

NewsletterForm.propTypes = {
  /** The Marketo Form Id */
  formId: PropTypes.string.isRequired
}

export default NewsletterForm
