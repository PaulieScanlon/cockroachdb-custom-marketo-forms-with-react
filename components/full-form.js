import React, { useState, useReducer, Fragment } from 'react'
import PropTypes from 'prop-types'

import { initialState, reducer } from '../hooks/use-reducer'

import MarketoForm from './marketo-form'

const FullForm = ({ formId }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch({
      type: 'isSubmitting'
    })

    window.MktoForms2.getForm(formId)
      .vals({ FirstName: firstName, LastName: lastName, Company_Name__c: company, Email: email })
      .onSuccess(() => {
        dispatch({
          type: 'success'
        })
        setFirstName('')
        setLastName('')
        setCompany('')
        setEmail('')
        return false
      })
      .submit()
  }

  return (
    <Fragment>
      <h3 className="m-0">Full Form</h3>
      <p>Example form used to capture more detailed user information.</p>
      <div className="bg-white rounded border border-brand-gray-b p-8 sm:px-16 pt-16">
        <h3 className="m-0 font-bold text-brand-deep-purple">Request More Information From Our Sales Team</h3>
        <small className="block mb-8 text-brand-gray">* Required fields</small>
        <form onSubmit={handleSubmit} className="form gap-8">
          <label className="form--label">
            <span className="form--label-text">
              Frist Name<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="text"
              required
              placeholder="Jo"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </label>
          <label className="form--label">
            <span className="form--label-text">
              Last Name<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="text"
              required
              placeholder="Doe"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </label>
          <label className="form--label">
            <span className="form--label-text">
              Company<span className="form--label-required">*</span>
            </span>
            <input
              className="form--input"
              type="text"
              required
              placeholder="Acme"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value)
              }}
            />
          </label>
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
            {state.isSubmitting ? <span className="form--announce-submitting">Submitting...</span> : null}
            {state.success ? (
              <span className="form--announce-success">Thanks. Someone will be in touch shorly.</span>
            ) : null}
          </span>
          <button type="submit" className="trainsition-all form--button-submit" disabled={state.isSubmitting}>
            {state.isSubmitting ? 'Please wait...' : 'Submit'}
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

FullForm.propTypes = {
  /** The Marketo Form Id */
  formId: PropTypes.string.isRequired
}

export default FullForm
