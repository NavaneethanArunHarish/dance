export default (state = [], action) => {
  
    switch (action.type) {
      case 'CREATE_BUSINESS_SUCCESS':
        return {
          ...state,
          createSuccess: action.createBusiness.data,
          error: null
        }
      case 'CREATE_BUSINESS_REJECTED':
  
      return {
          ...state,
          createRejected: action.createBusiness.data,
          error: null
        }
        case 'UPDATE_BUSINESS_SUCCESS':
        return {
          ...state,
          createSuccess: action.updateBusiness.data,
          error: null
        }
      case 'UPDATE_BUSINESS_REJECTED':
  
      return {
          ...state,
          createRejected: action.updateBusiness.data,
          error: null
        }
        case 'GET_BUSINESS_SUCCESS':
        return {
          ...state,
          getSuccess: action.getBusiness,
          error: null
        }
      case '  GET_BUSINESS_REJECTED':
  
      return {
          ...state,
          getRejected: action.getBusiness,
          error: null
        }
      default:
        return state;
    }
  };