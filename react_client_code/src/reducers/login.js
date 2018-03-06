const initialState = {
};

export default function login(state = initialState, action) {
  console.log('-------------------reducer----------------------',action)
  
  switch (action.type) {
      case 'USER_LOGIN':
       return {
         ...state,
         userLoginResponse:action,
       };

       case 'CREATE_STUDENT_SUCCESS':
       return {
         ...state,
         loginStudentResponse:action.createStudentRegistration.data,
       };

       case 'ALL_TRAINERS':
        return {
          ...state,
          allTrainers:action.data,
        };
        case 'TRAINER_LOGIN':
        return {
          ...state,
          trainerLoginResponse:action,
        };
        case 'ADMIN_LOGIN':
        return {
          ...state,
          adminLoginResponse:action,
        };
        case 'BUSINESS_ADMIN_LOGIN':
        return {
          ...state,
          adminLoginResponse:action,
        };


    default:
      return state;
  }
  
}
