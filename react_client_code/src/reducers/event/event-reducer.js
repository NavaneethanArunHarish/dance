
export default (state = [], action) => {

  switch (action.type) {
    case 'CREATE_EVENT_SUCCESS':
      return {
        ...state,
        loading: true,
        createSuccess: action.createEvent.data,
        error: null
      }
    case 'CREATE_EVENT_REJECTED':

    return {
        ...state,
        loading: true,
        createrejected: action.createEvent,
        error: null
      }

    case 'GET_EVENT_BY_CATEGORY_SUCCESS':
      return {
        ...state,
        loading: true,
        findEventSuccess: action.findEventByCategory.data,
        error: null
      }
    case 'GET_EVENT_BY_CATEGORY_REJECT':

    return {
        ...state,
        loading: true,
        findEventRejected: action.findEventByCategory,
        error: null
      }

    case 'RECEIVE_ALL_EVENT':

    return {
        ...state,
        loading: true,
        getEventSuccess: action.payload.data,
        error: null
     }

    case 'DELETE_EVENT_SUCCESS':
     
    return {
        ...state,
        loading: true,
        deleteEventSuccess: action.deleteEvent.data,
        error: null
    }

    case 'DELETE_EVENT_REJECTED':
          
    return {
        ...state,
        loading: true,
        deleteEventReject: action.deleteEvent.data,
        error: null
    }
    default:
      return state;
  }

  
};