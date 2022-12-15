import { useState, useEffect } from 'react'

const loadMarketoScript = (setScriptLoaded) => {
  if (window.MktoForms2) return setScriptLoaded(true)

  const script = document.createElement('script')
  script.defer = true
  script.onload = () => (window?.MktoForms2 ? setScriptLoaded(true) : null)
  script.src = `//${process.env.NEXT_PUBLIC_BASE_URL}/js/forms2/js/forms2.min.js`
  document.head.appendChild(script)
}

const useMarketo = ({ formId, callback }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [formLoaded, setFormLoaded] = useState(false)

  useEffect(() => {
    if (scriptLoaded) {
      if (!formLoaded) {
        MktoForms2.loadForm(
          `//${process.env.NEXT_PUBLIC_BASE_URL}`,
          process.env.NEXT_PUBLIC_MUNCHKIN_ID,
          formId,
          callback
        )
        setFormLoaded(true)
      }
    } else {
      loadMarketoScript(setScriptLoaded)
    }
  }, [scriptLoaded])
}

export default useMarketo
