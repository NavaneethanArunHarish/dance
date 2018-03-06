export default (state = [], action) => {
      switch (action.type) {
        case 'CREATE_STUDENT_REGISTRATION_SUCCESS':
          return {
            ...state,
            createSuccess: action.createStudentRegistration.data,
            error: null
          }
        case 'CREATE_STUDENT_REGISTRATION_REJECTED':
    
        return {
            ...state,
            createRejected: action.createStudentRegistration.data,
            error: null
          }

        case 'RECEIVE_ALL_USER':
          
        return {
            ...state,
            getUserSuccess: action.payload.data,
            error: null
          }
        case 'USER_PRIVILAGE_SUCCESS':
          
        return {
            ...state,
            updateUserPrevilage: action.userPrevilage,
            error: null
          }
        default:
          return state;
      }
    };