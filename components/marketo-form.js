import React, { memo } from 'react'
import PropTypes from 'prop-types'

import useMarketo from '../hooks/use-marketo'

const MarketoForm = memo(({ debug, formId }) => {
  useMarketo({
    formId: formId,
    callback: () => {}
  })

  return <form id={`mktoForm_${formId}`} className={debug ? 'bg-brand-deep-purple' : 'hidden'} aria-hidden="true" />
})

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
