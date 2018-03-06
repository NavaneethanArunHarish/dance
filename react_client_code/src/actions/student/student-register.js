import axios from 'axios';
import {BaseUrl} from '../../_constants/baseurl';


export default (result,callback) => {
  console.log('-----------------',result)
        return dispatch => {
            axios({
              method: 'post',
              url: BaseUrl.RestUrl+"user/signup",
              data: result,
         
            })
              .then(response => {
                var data = response;
                console.log('action  data===',data)
                callback(data);
                dispatch({
                  type: "CREATE_STUDENT_REGISTRATION_SUCCESS",
                  createStudentRegistration: data
                });
              }).catch(error => {
                console.log('--------------',error)
                callback(error)
                dispatch({ type: "CREATE_STUDENT_REGISTRATION_REJECTED" , createStudentRegistration: error });
              });
          }

        
}