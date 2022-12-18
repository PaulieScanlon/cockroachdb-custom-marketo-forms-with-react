export const initialState = {
  isSubmitting: false,
  success: false
}

export const reducer = (state, action) => {
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
