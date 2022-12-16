import { useState, useEffect } from 'react'

const removeFormStyles = (form) => {
  const formElem = form.getFormElem()[0]
  // formElem.removeAttribute('style')
  console.log(formElem.children)

  Array.from(formElem.children).forEach((element) => {
    console.log(element.type)
    if (element.type && element.type === 'text/css') {
      element.remove()
    }
  })
  // formElem.querySelectorAll('[style]').forEach((element) => {
  //   // element.removeAttribute('style')
  //   // element.removeAttribute('class')
  //   console.log(element)
  // })
}

const addScriptToDom = (setScriptAdded) => {
  if (window.MktoForms2) return setScriptAdded(true)

  const script = document.createElement('script')
  script.defer = true
  script.onload = () => (window?.MktoForms2 ? setScriptAdded(true) : null)
  script.src = `//${process.env.NEXT_PUBLIC_BASE_URL}/js/forms2/js/forms2.min.js`
  document.head.appendChild(script)
}

const useMarketo = ({ formId, callback }) => {
  const [scriptAdded, setScriptAdded] = useState(false)
  const [formLoaded, setFormLoaded] = useState(false)

  useEffect(() => {
    if (scriptAdded) {
      if (!formLoaded) {
        MktoForms2.loadForm(
          `//${process.env.NEXT_PUBLIC_BASE_URL}`,
          process.env.NEXT_PUBLIC_MUNCHKIN_ID,
          formId,
          callback
        )
        MktoForms2.whenRendered((form) => removeFormStyles(form))
        setFormLoaded(true)
      }
    } else {
      addScriptToDom(setScriptAdded)
    }
  }, [scriptAdded])
}

export default useMarketo
