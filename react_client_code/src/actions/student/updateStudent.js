import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';


export default (result,callback) => {
  console.log('-----------------',result)
        return dispatch => {
            axios({
              method: 'put',
              url: BaseUrl.RestUrl+"user/update_student",
              data: result,
         
            })
              .then(response => {
                var data = response;
                console.log('action  data===',data)
                callback(data);
                dispatch({
                  type: "UPDATE_STUDENT_REGISTRATION_SUCCESS",
                  updateStudentRegistration: data
                });
              }).catch(error => {
                console.log('--------------',error)
                callback(error)
                dispatch({ type: "UPDATE_STUDENT_REGISTRATION_REJECTED" , updateStudentRegistration: error });
              });
          }

        
}