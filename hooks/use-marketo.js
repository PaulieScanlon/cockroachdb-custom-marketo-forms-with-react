import { useState, useEffect } from 'react'

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
        MktoForms2.whenRendered((form) => {
          const formElement = form.getFormElem()[0]
          /** Remove the style attribute and make for and id attributes unique */
          Array.from(formElement.querySelectorAll('[style]'))
            .concat(formElement)
            .forEach((element) => {
              element.removeAttribute('style')
              if (element.tagName === 'LABEL') {
                element.setAttribute('for', `${element.getAttribute('for')}_${formId}`)
                element.setAttribute('id', `${element.getAttribute('id')}_${formId}`)
              }
              if (element.tagName === 'INPUT') {
                element.setAttribute('id', `${element.getAttribute('id')}_${formId}`)
              }
            })
          /** remove <style /> from DOM */
          Array.from(formElement.children).forEach((element) => {
            if (element.type && element.type === 'text/css') {
              element.remove()
            }
          })
        })
        setFormLoaded(true)
      }
    } else {
      addScriptToDom(setScriptAdded)
    }
  }, [scriptAdded])
}

export default useMarketo
