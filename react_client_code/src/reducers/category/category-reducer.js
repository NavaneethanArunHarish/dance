export default (state = [], action) => {
  
    switch (action.type) {
      case 'CREATE_CATEGORY_SUCCESS':
        return {
          ...state,
          createSuccess: action.createCategory.data,
          error: null
        }
      case 'CREATE_CATEGORY_REJECTED':
  
      return {
          ...state,
          createRejected: action.createCategory.data,
          error: null
        }
      

//get category reducer
  
    case 'GET_CATEGORY_SUCCESS':
    console.log(action)
      return {
        ...state,
        getSuccess: action.getCategory.data,
        error: null
      }
    case 'GET_CATEGORY_REJECTED':

    return {
        ...state,
        getRejected: action.getCategory.data,
        error: null
      }

//delete category
      case 'DELETE_CATEGORY_SUCCESS':
      return {
        ...state,
        deleteSuccess: action.deleteCategory.data,
        error: null
      }
    case 'DELETE_CATEGORY_REJECTED':

    return {
        ...state,
        deleteRejected: action.deleteCategory.data,
        error: null
      }
    default:
      return state;
  }
};

