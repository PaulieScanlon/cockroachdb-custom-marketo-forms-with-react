import React from 'react'
import PropTypes from 'prop-types'

import useMarketo from '../hooks/use-marketo'

const MarketoForm = ({ debug, formId }) => {
  useMarketo({
    // baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    // munchkinId: process.env.NEXT_PUBLIC_MUNCHKIN_ID,
    formId: formId,
    callback: () => {}
  })

  return (
    <form
      id={`mktoForm_${formId}`}
      className={debug ? 'w-full outline outline-brand-danger p-4 bg-brand-deep-purple' : 'hidden'}
      // aria-hidden="true"
    />
  )
}

MarketoForm.defaultProps = {
  debug: false
}

MarketoForm.propTypes = {
  /** Show the real Marketo form */
  debug: PropTypes.bool,
  /** The Marketo Form Id */
  formId: PropTypes.string.isRequired
}

export default MarketoForm
