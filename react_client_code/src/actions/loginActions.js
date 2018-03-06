import axios from 'axios';
import {
  BaseUrl
} from '../_constants/baseurl';


export function userLogin(email, pwd) {
  console.log('came login service - > ',email);
  return dispatch => {
    axios({
        method: 'post',
        url: BaseUrl.RestUrl + 'user/login',
        data: {
          email: email,
          password: pwd
        }
      })
      .then(response => {
        console.log("respo data ashiwn - - > ", response.data);
        var newData = response;
        dispatch({
          type: "CREATE_STUDENT_SUCCESS",
          createStudentRegistration: newData
        });
        var data = response.data.result.token;
        var user_type = response.data.result.user.user_type;

        if(user_type=="USER"){

        dispatch({
          type: "USER_LOGIN",
          data, user_type,
        });
      }else if(user_type=="TRAINER"){
        dispatch({
          type: "TRAINER_LOGIN",
          data, user_type,
        });
      }
      else if(user_type == "BUSINESS_ADMIN")
      
      dispatch({
        type: "BUSINESS_ADMIN_LOGIN",
        data, user_type,
      });
      else
        dispatch({
          type: "ADMIN_LOGIN",
          data, user_type,
        });
      }).catch(error => {
        console.log("got error while loginValidation---> ", error);
        // var data = error;
        // dispatch({
        //   type: "USER_LOGIN",
        //   data,
        // });
      });
  }
}

export function getTrainers(token) {
  console.log('came service get Trainers - > ', token);
  return dispatch => {
    axios({
        method: 'get',
        url: BaseUrl.RestUrl + 'user/getall_user',
        headers: {
          'Content-Type': "application/json",
          'Authorization': "JWT " + token
        }
      })
      .then(response => {
        var data = response;
        console.log("response while getting trainers data -- > ", data);
        dispatch({
          type: "ALL_TRAINERS",
          data,
        });
      }).catch(error => {
        console.log("got error while get all trainers---> ", error);
      });
  }
}