import React, { useState, useReducer, Fragment } from 'react'

const initalState = {
  isSubmitting: false,
  success: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'isSubmitting': {
      return {
        ...state,
        isSubmitting: true,
        success: false
      }
    }
    case 'success': {
      return {
        ...state,
        isSubmitting: false,
        success: true
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

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
    // .showErrorMessage(null, null)
  }

  return (
    <Fragment>
      <h2>Subscribe to Our Newsletter</h2>
      <div className="bg-white rounded border border-brand-gray-b p-8">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="flex flex-col gap-1">
            <span className="flex items-center gap-1 font-bold text-brand-deep-purple">
              Email<span className="text-brand-danger h-6">*</span>
            </span>
            <input
              className="px-4 py-2 border-b border-b-brand-deep-purple font-normal text-brand-gray"
              type="email"
              required
              placeholder="you@example.xyz"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </label>
          <span className="block h-[40px] py-2 font-bold text-sm ">
            {state.isSubmitting ? <span className="text-brand-orange">Submitting...</span> : null}
            {state.success ? <span className="text-brand-success">Thanks for signing up.</span> : null}
          </span>
          <button
            type="submit"
            className="mt-4 px-4 py-3 rounded font-medium text-white bg-brand-electric-purple sm:self-start disabled:bg-brand-neutral-400 disabled:cursor-not-allowed"
            disabled={state.isSubmitting}
          >
            Subscribe
          </button>
        </form>
      </div>
    </Fragment>
  )
}

export default NewsletterForm
